CORS
----

* [Cross-Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
    * indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
    * "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request.
    * (client javascript) can only request resources from the same origin the application was loaded from,
        * unless the response from _other origins_ includes the right CORS headers.
* [What is the problem CORS is solving?](https://stackoverflow.com/questions/27365303/what-is-the-issue-cors-is-trying-to-solve)
    * KEY CONCEPT: By default - every time your browser communicates with known domains it WILL provide your authenticated cookie identifiers in HTTP headers.
        * e.g. every time you access `mail.google.com` you send your private access token to allow you to read your inbox
    * > Suppose I accidentally load http://evil.com/, 
        > which sends a request for http://mail.google.com/. 
        > If the SOP were not in place, and I was signed into Gmail, the script at evil.com could see my inbox.
* HTTP Method: [OPTIONS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS) request
    * ```bash
        curl -X OPTIONS http://localhost:8000/ -v
        curl -X OPTIONS http://localhost:8000/items -v
        ```
    * `OPTIONS` Response headers (for pre flight) contain
        * ```
            204
            {
                "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE",
                "Access-Control-Allow-Headers": "Content-Type"
            }
            ```
    * All responses headers (by default) contain
        * ```
            {
                "Access-Control-Allow-Origin": "*"
            }
            ```
    * Hint: In my solution added Middleware to apply all these headers to EVERY response

* Why do browsers all enforce CORS?

