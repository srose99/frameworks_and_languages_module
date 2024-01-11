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

### (name of Issue 2)

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


