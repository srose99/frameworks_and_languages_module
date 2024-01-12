Technical Report
================

(intro describing purpose of report - 200ish words)


Critique of Server/Client prototype
---------------------

### Overview
()

### Server Issue: Hard-Coded HTTP version

`head = f"HTTP/1.0 {code} {RESPONSE_CODES[code]}".encode('utf8')`

This code locks the HTTP version to 1.0 in the response header. This is problematic if the server needs to respond to different HTTP versions. The version should be dynamically determined based on the incoming request or configured as a variable.

### Lack of error handling

```
fetch(`${urlAPI}/item`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
})
.then(response => response.json())
.then(() => hashchange())  // reload the page
.catch(err => console.error(err));
```
The snippet lacks any kind of error handling it instead just prints it to the console. Without error handling the fetch can return a JSON response but also return an error simultaneously. This pattern isn't conducive to providing helpful feedback on what is happening within the function.

### Recommendation

The existing implementation contains a combination of poor error handling and error prone software patterns such as manual web-socket handling that can lead to further issues down the line. The synchronous nature of the solution also limits the solutions ability to handle scalability and responsiveness issues, making it not practical for production use.

The suggested direction to move towards would be one of implementing server and client web frameworks. Frameworks abstract away low-level complexities such as web socket handling; Simplifying the code to less familiar developers, making the code more readable, maintainable, and less error-prone.


Server Framework Features
-------------------------

### Express Middleware


Middleware in express allows the execution of code during the request-response cycle. A middleware function can modify the request or response objects, end the request-response cycle, and also call the next middleware in the stack.

`app.use(express.json())`

(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)

The problem this feature solves is the issue that developers would have to parse through request-response bodies manually for JSON data and then perform conversions in order to operate upon the data. This feature circumvents the manual parsing and conversion, making JSON payloads easier to work with and faster to operate upon for developers. This feature also ensures the JSON is parsed early in the middleware stack, making subsequent middleware functions have the ability to operate on the data before it is handled by other functions in the server. There are issues with this style of middleware, namely security implications due to the nature that `express.json()` accepts and parses any JSON sent by the client. Meaning very large payloads could be sent maliciously using this type of middleware.

### References

www.linkedin.com. (n.d.). Express.js: The Good, the Bad, and the Ugly. [online] Available at: https://www.linkedin.com/pulse/expressjs-good-bad-ugly-aziz-taha/.

‌expressjs.com. (n.d.). Using Express middleware. [online] Available at: https://expressjs.com/en/guide/using-middleware.html.

‌


### Options Request Handling & CORS

This feature is used to handle HTTP OPTIONS requests that are usually sent as part of the CORS mechanism. CORS is a security feature sent in a request format by web browsers to control whether web pages from one origin can make requests to another origin. Through the `app.use()` functionality of express, the CORS policy can be set to allow requests from any or specific origins, specify the allowed methods from that origin i.e 'GET, POST, DELETE', and define the allowed headers from the origin.


```
//CORS Policy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next()
})

//Specific options for response type 204
app.options('*', (req, res) => {
    res.status(204).end()
})

//Options for the "/item" endpoint due to method not allowed errors
app.options('/item', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'POST')
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    res.send()
})
```

The problem this is solving is that of the Same-Origin Policy implemented by web browsers, which restricts web pages from making requests to a different domain from the one that served the web page. Implementing CORS options correctly facilitates Cross-Origin communication through identifying which domains the server should allow requests from, which methods it should allow, and what content types it should allow. The benefits of this are secure communication between domains and pre-flight handling of whether a requesting domain is appropriate to be making requests of the server. The main problem with express' handling of cors is its ability to implement wildcard('*') variables in the headers to allow any origin; This if not handled in a contained environment can lead to serious security vulnerabilities.

### References

expressjs.com. (n.d.). Security Best Practices for Express in Production. [online] Available at: https://expressjs.com/en/advanced/best-practice-security.html.

expressjs.com. (n.d.). Express cors middleware. [online] Available at: https://expressjs.com/en/resources/middleware/cors.html.

‌

‌


### (name of Feature 3)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


Server Language Features
-----------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)



Client Framework Features
-------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 2)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


### (name of Feature 3)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)


Client Language Features
------------------------

### (name of Feature 1)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)

### (name of Feature 2)

(Technical description of the feature - 40ish words)
(A code block snippet example demonstrating the feature)
(Explain the problem-this-is-solving/why/benefits/problems - 40ish words)
(Provide reference urls to your sources of information about the feature - required)



Conclusions
-----------

(justify why frameworks are recommended - 120ish words)
(justify which frameworks should be used and why 180ish words)


Notes on Framework-less Implementation
==========================

Server:
    How is routing handled?

    https://github.com/srose99/frameworks_and_languages_module/blob/ad2fa47971cd4f067b25f0d7134cd8db2a1b8c95/example_server/app/server.py#L9-L16

    https://github.com/srose99/frameworks_and_languages_module/blob/ad2fa47971cd4f067b25f0d7134cd8db2a1b8c95/example_server/app/web_utils.py#L15-L35

    Is it expandable? no, because of this implementation is can handle basic routing but any type of expansion leads to overriding. Also the routing is case/order sensitive so in future adding more routes will become difficult and time consuming

    Where are the CORS Headers set?

    https://github.com/srose99/frameworks_and_languages_module/blob/ad2fa47971cd4f067b25f0d7134cd8db2a1b8c95/example_server/app/web_utils.py#L48-L60

    Is this good/bad?

    It will work correctly if the function is called correctly. It is imported onto the http header but is'nt inherently called. Also accepts "*" as a default meaning any domain can access, extremely unsafe.

    The socket/network handling is very weak, why?

    No input validation for requests 

    What problem is Middleware trying to solve?

    Middleware is working to perform repetitive actions such as JSON decoding to either singular endpoints or groups of endpoints. In the express example the app.use syntax is used to outline predefined logic for the server to handle requests and responses. This allows us as developers to let the middleware handle it without having to define logic for each endpoint as to how it should behave when a request is made to it.


