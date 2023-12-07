import falcon
import math
import json
import uuid
from datetime import datetime, timedelta
from falcon.http_status import HTTPStatus

#Solution for opening CORS to all, taken from https://github.com/falconry/falcon/issues/1220 
class CORSMiddleware:
    def process_request(self, req, resp):
      resp.set_header('Access-Control-Allow-Origin', '*')
      resp.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      resp.set_header('Access-Control-Allow-Headers', 'Content-Type')
      resp.set_header('Access-Control-Max-Age', '1728000')
      if req.method == 'OPTIONS':
            raise HTTPStatus(falcon.HTTP_204, body='\n')
#applying that middleware to the application
app = falcon.App(middleware=[CORSMiddleware()])

tooldataset = [
    {
        "id": "1",
        "userid": "user1",
        "keywords": ["hammer", "screwdriver"],
        "description": "A hammer and screwdriver set",
        "image": "http://placekitten.com/100/100",
        "lat": 12.121212,
        "lon": 13.131313,
        "date_from": ""
    }
]
#Logic for handling unique identifiers using the uuid library
def generate_uuid():
    return str(uuid.uuid4())
#Date generation in the iso format for cypress tests
def generate_date_iso():
    current_date = datetime.now()
    iso_date = current_date.isoformat()
    return iso_date
#euclidean distance calculation using logic from  https://stackoverflow.com/questions/20916953/get-distance-between-two-points-in-canvas
def calculate_distance(lat1, lon1, lat2, lon2):
    distance = math.sqrt((lat2 - lat1)**2 + (lon2 - lon1)**2)
    return distance
#Default return when visiting the port to show it is running and for cypress tests
class FrontPageResource:
    def on_get(self, req, resp):
        resp.content_type = 'text/html'
        resp.body = '<html><body>Welcome to my API!</body></html>'

class ItemsResource:
    def on_get(self, req, resp):
        user_id = req.get_param('user_id')
        lat = req.get_param('lat')
        lon = req.get_param('lon')
        radius = req.get_param('radius')
        date_from = req.get_param('date_from')
        keywords = req.get_param('keywords')
        #empty array instantiated for the returned data
        filtered_items = tooldataset
        #Logic for handling extra params that may be passed to the api on a get i.e user_id, lat + lon etc.
        if user_id:
            filtered_items = [item for item in filtered_items if item['userid'] == user_id]

        if lat and lon and radius:
            filtered_items = [
                item for item in filtered_items if calculate_distance(
                    float(lat), float(lon), float(item['lat']), float(item['lon'])
                ) <= float(radius)
            ]

        if date_from:
            parsed_date_from = datetime.strptime(date_from, "%Y-%m-%dT%H:%M:%S.%fZ")
            time_window = 5 * 60  
            filtered_items = [
                item for item in filtered_items if parsed_date_from <= datetime.fromisoformat(item['date_from']) <= parsed_date_from + timedelta(seconds=time_window)
            ]
            for item in filtered_items:
                print(f"parsed_date_from: {parsed_date_from}, item['date_from']: {datetime.fromisoformat(item['date_from'])}")


        if keywords:
            #isinstance, python function returning a bool if parsed var is of type provided
            search_keywords = keywords if isinstance(keywords, list) else keywords.split(',')
            filtered_items = [
                item for item in filtered_items if all(keyword in item['keywords'] for keyword in search_keywords)
            ]

        resp.media = filtered_items

class ItemResource:
    def on_get(self, req, resp, id):
        #filtering by id
        item = next((item for item in tooldataset if item['id'] == id), None)
        if item:
            resp.media = item
        else:
            resp.status = falcon.HTTP_404
            resp.media = {'error': 'data not found'}

    def on_delete(self, req, resp, id):
        global tooldataset
        found_item = next((item for item in tooldataset if item['id'] == id), None)
        if found_item:
            tooldataset = [item for item in tooldataset if item['id'] != id]
            resp.status = falcon.HTTP_204
            resp.media = {'message': 'data selected removed successfully'}
        else:
            resp.status = falcon.HTTP_404
            resp.media = {'error': 'data not found'}

class CreateItemResource:
    def on_post(self, req, resp):
        data = req.media
        user_id = data.get('user_id')
        keywords = data.get('keywords')
        description = data.get('description')
        lat = data.get('lat')
        lon = data.get('lon')
        # if listed var's are not provided return an invalid post request
        if not all([user_id, keywords, description, lat, lon]):
            resp.status = falcon.HTTP_405
            resp.media = {'error': 'Invalid JSON data format'}
        else:
            new_item = {
                'id': generate_uuid(),
                'userid': user_id,
                'keywords': keywords,
                'description': description,
                'image': data.get('image', ''),
                'lat': lat,
                'lon': lon,
                'date_from': generate_date_iso(),
            }
            tooldataset.append(new_item)
            resp.status = falcon.HTTP_201
            resp.media = new_item

app.add_route('/', FrontPageResource())
app.add_route('/items', ItemsResource())
app.add_route('/item/{id}', ItemResource())
app.add_route('/item', CreateItemResource())

if __name__ == '__main__':
    #server from https://docs.python.org/3/library/wsgiref.html for hosting the api
    from wsgiref import simple_server

    httpd = simple_server.make_server('', 8000, app)
    httpd.serve_forever()