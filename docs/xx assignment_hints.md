Implementation Hints
---------------------

### Query String Params

```javascript
	const DEFAULT_API = '/api/v1';  // default to current http(s)://currentHost:currentPort/api/v1'
	const urlParams = new URLSearchParams(window.location.search);
	const urlAPI = (urlParams.get('api') || DEFAULT_API).replace(/\/$/, '');  // Get api url (and remove trailing slash if present)
```

### Data store

A plain dict/associative-array/hashmap/object

```python
ITEMS = {
    1: {
        "id": 1,
        "user_id": "user1234",
        "keywords": ["hammer", "nails", "tools"],
        "description": "A hammer and nails set",
        "lat": 1,
        "lon": 1,
        "date_from": "2021-11-22T08:22:39.067408",
    }
}
NEXT_ID = max(ITEMS.keys()) + 1
```


Automated Tests and CI
----------------------

### Server Tests

```bash
# Start a second terminal and drag to a second columb
# Run example_server with
make run_example_server
# or
cd example_server && python3 main.py
```
```bash
# Start a second terminal and drag to a second column
cd test_server
pip install pytest

# run all tests
pytest test_api.py

# run all tests and drop into debugger on fail
pytest test_api.py --pdb

# run single test
pytest test_api.py::test_item_post
# add `breakpoint()` into python code to debug

# Example of running tests an a server other than localhost:8000
URI_SERVER=https://long_thing pytest test_api.py::test_FUNCTION_NAME
```

TASK: 
* Run the example_server and run the tests against it.
* Run a single test
* Drop into a debugger with `breakpoint()`

### Client

* Run headless (on GitPod)
    * Download/See video
* Demo GitPod server and local cypress client
    * Electron and rewind
* More in future lectures
