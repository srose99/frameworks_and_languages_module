"""
These tests are deliberately constructed for a learning activity.
There are lots of repeated patters that are design for a learner to see graduated progress.
As they construct more functionality, more tests should pass.

Professional test would not be written like this.
"""

import random
import urllib.parse
import datetime

import pytest
import requests


def isiterable(iterable):
    """
    https://stackoverflow.com/a/36407550/3356840
    `iter(o)` will work for all items that implement `__iter__` and is more correct/flexible than explicitly looking for a `Sequence`
    """
    if isinstance(iterable, (str, bytes)):
        return False
    try:
        _ = iter(iterable)
    except TypeError:
        return False
    else:
        return True



@pytest.fixture
def new_item(ENDPOINT):
    ITEM = {
        'user_id': "user1234",
        'keywords': ["hammer", "nails", "tools"],
        "description": "A hammer and nails set",
        "lat": (random.random() * (70*2)) - 70,
        "lon": (random.random() * (180*2)) - 180,
    }
    response = requests.post(ENDPOINT + '/item', json=ITEM)
    yield response.json()


def test_port(ENDPOINT):
    """
    Check port if open
    """
    pass


def test_root(ENDPOINT):
    """
    Base endpoint should return html of some form to the user.
    """
    response = requests.get(ENDPOINT)
    assert response.status_code == 200
    assert 'text/html' in response.headers['Content-type']
    assert response.text

def test_item_post_405(ENDPOINT):
    ITEM = {
        "a": 1,
        "b": 2,
    }
    response = requests.post(ENDPOINT + '/item', json=ITEM)
    assert response.status_code == 405

def test_item_post_201(ENDPOINT):
    """
    After POSTing a successful item - we get a json object of the created object
    The created object must have an id field
    """
    ITEM = {
        'user_id': "user1234",
        'keywords': ["hammer", "nails", "tools"],
        "description": "A hammer and nails set. In canterbury",
        "lat": 51.2798438,
        "lon": 1.0830275,
    }
    response = requests.post(f'{ENDPOINT}/item', json=ITEM)
    assert response.status_code == 201
    assert 'application/json' in response.headers.get('Content-type')
    assert response.json().get('id')

def test_item_get_200(ENDPOINT, new_item):
    """
    We should be able to GET an item after it has been created with a POST
    """
    response = requests.get(f"{ENDPOINT}/item/{new_item['id']}")
    assert response.status_code == 200
def test_item_get_200_fields(ENDPOINT, new_item):
    """
    When we GET an individual item, it should have all of the fields that were returned by the creation POST
    """
    response = requests.get(f"{ENDPOINT}/item/{new_item['id']}")
    assert response.status_code == 200
    assert response.json() == new_item

def test_item_get_404(ENDPOINT):
    """
    GETing an item id that is not in our dataset should return a 404
    """
    response = requests.get(f"{ENDPOINT}/item/99999999")
    assert response.status_code == 404

def test_items_get_200(ENDPOINT):
    """
    GET /items responds with 'list'
    """
    response = requests.get(f"{ENDPOINT}/items")
    assert response.status_code == 200
    items = response.json()
    assert isinstance(items, list)
def test_items_get_200_fields(ENDPOINT, new_item):
    """
    After POSTing an item, a GET to /items should have our new item as a last entry of the list/array
    """
    response = requests.get(f"{ENDPOINT}/items")
    assert response.status_code == 200
    items = response.json()
    assert items[-1] == new_item

def test_item_delete_404(ENDPOINT):
    """
    DELETEing an item that does not exist is a 404
    """
    response = requests.delete(f"{ENDPOINT}/item/99999999")
    assert response.status_code == 404

def test_item_delete(ENDPOINT, new_item):
    """
    create an item with POST
    GET the created  item to see if it exists 
    DELETE the item
    GET the item_id again and it should not exist
    """
    url = f"{ENDPOINT}/item/{new_item['id']}"
    response = requests.get(url)
    assert response.status_code == 200
    response = requests.delete(url)
    assert response.status_code == 204
    response = requests.get(url)
    response.status_code == 404

def test_root_options_cors_headers(ENDPOINT):
    """
    Server must respond to OPTIONS request for use with real browser
    """
    response = requests.options(ENDPOINT)
    assert response.status_code == 204
    assert 'POST' in response.headers['Access-Control-Allow-Methods']
    #assert 'Content-Type' in response.headers['Access-Control-Allow-Headers']  # Investigate why this was needed - this is not part of express.js default CORS handling? BLAME?

def test_items_get_cors_headers(ENDPOINT):
    """
    OPTIONS request to an endpoint should contain a CORS header (preferably allowing all domains `*`)
    """
    response = requests.options(f"{ENDPOINT}/items")
    assert response.headers['Access-Control-Allow-Origin'], 'CORS Headers must be set - preferably to * for this learning exercise'


# Advanced Tests ---------------------------------------------------------------

@pytest.fixture
def item_factory(ENDPOINT):
    _item_ids = set()
    def _item_factory(**kwargs):
        ITEM = {
            'user_id': "user1234",
            'keywords': ["hammer", "nails", "tools"],
            "description": "A hammer and nails set",
            "lat": (random.random() * (70*2)) - 70,
            "lon": (random.random() * (180*2)) - 180,
            **kwargs,
        }
        response = requests.post(ENDPOINT + '/item', json=ITEM)
        item = response.json()
        _item_ids.add(item['id'])
        return item
    yield _item_factory
    for _id in _item_ids:
        response = requests.delete(ENDPOINT + f"/item/{_id}")
        assert response.status_code == 204

@pytest.fixture
def get_items(ENDPOINT):
    def _get_items(**kwargs):
        kwargs = {k:v if not isiterable(v) else ','.join(v) for k,v in kwargs.items()}  # encode arrays as comma separated
        return requests.get(ENDPOINT + f"/items?" + urllib.parse.urlencode(kwargs)).json()
    return _get_items


def test_item_contains_valid_iso_date_from(ENDPOINT, item_factory):
    """
    date_from has been created and is a pauseable ISO datetime
    """
    new_item = item_factory()
    response = requests.get(f"{ENDPOINT}/item/{new_item['id']}")
    date_from = datetime.datetime.fromisoformat(response.json()['date_from'])
    assert date_from
    assert date_from.date() == datetime.datetime.now().date(), "an item that has just been created should have today's date"


def test_items_contains_from_post(ENDPOINT, item_factory):
    """
    Create new_item and check that it appears in the items list
    """
    new_item = item_factory()
    response = requests.get(ENDPOINT + f"/items")
    item_ids = tuple(item['id'] for item in response.json())
    assert new_item['id'] in item_ids


def test_ids_generated_are_unique(ENDPOINT, new_item, get_items, item_factory):
    """
    It is expected that ID's are unique. Most systems expect to not reuse ID's.
    """
    ids = tuple(item['id'] for item in get_items())
    for id in ids:  # DELETE all items
        requests.delete(f"{ENDPOINT}/item/{id}")
    new_item = item_factory()
    assert new_item['id'] not in ids, 'id fields should be unique and not reused from previous deleted items'


#@pytest.mark.skip(reason="optional functionality not used by client")
def test_items_filter_username(get_items, item_factory):
    for i in range(6):
        item_factory(user_id=f"user{i//2}")
    
    items = get_items(user_id='user1')
    assert len(items) == 2, "There should be items posted by user1"


#@pytest.mark.skip(reason="optional functionality not used by client")
def test_items_filter_location(get_items, item_factory):
    # Create mock items in line
    for lat in (100+(i*0.1) for i in range(6)):
        item_factory(lat=lat, lon=20.0)
    
    items = get_items(lat=100, lon=20.0, radius=0.21)
    assert len(items) == 3, "should return lat=100 + lat=100.1 + lat=100.2"


#@pytest.mark.skip(reason="optional functionality not used by client")
def test_items_filter_date_from(get_items, item_factory):
    for i in range(2):
        item_factory()
    date_from = datetime.datetime.now()
    for i in range(2):
        item_factory()
    items = get_items(date_from=date_from.isoformat())
    assert len(items) == 2, "There should be items posted since the date_from"


#@pytest.mark.skip(reason="optional functionality not used by client")
def test_items_filter_keywords(get_items, item_factory):
    item_factory(keywords=["test1", "test2"])
    item_factory(keywords=["test2", "test3"])
    item_factory(keywords=["test1", "test2", "test3"])

    items = get_items(keywords=['test1'])
    assert len(items) == 2
    items = get_items(keywords=['test2'])
    assert len(items) == 3
    items = get_items(keywords=['test1', 'test2'])
    assert len(items) == 2
    items = get_items(keywords=['test1','test2', 'test3'])
    assert len(items) == 1