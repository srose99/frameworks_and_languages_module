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


### Route Parameters

Route parameters are named URL segments that are used to capture the values specified at their position in the URL. This allows for the extraction of values from the URL, making them accessible from the `req.params` object.
(A code block snippet example demonstrating the feature)
```
app.get('/item/:id', (req, res) => {
    const id = req.params.id
    const item = toolsdataset.find((data) => data.id === id)
    if (item) {
        res.status(200).json(item)
    } else {
        res.status(404).json({ error: 'data not found'})
    }
})
```
The problem this aims to solve is the issue of static handling of requests and instances of a resource, for example a news application will have different articles based on genre but also within those genres each article will have a unique ID. Without route params you would have to search every article for the one with the correct ID, with route parameters you can create a single route to handle various instances of a resource and make interacting with your API routes dynamic.

### References 

Expressjs.com. (2017). Express routing. [online] Available at: https://expressjs.com/en/guide/routing.html.

Mastering JS. (n.d.). Route Parameters in Express. [online] Available at: https://masteringjs.io/tutorials/express/route-parameters [Accessed 11 Jan. 2024].

‌

‌

Server Language Features
-----------------------

### Array Filtering

The array `filter` method feature in JavaScript creates a new array by evaluating each element against data from a provided function. Elements returning `true` are included in the new array, facilitating data comparison with concise array transformations based on specific criteria.

`filteredItems = filteredItems.filter((data) => data.userid === user_id)`

This solves the issue of manual iteration and comparison, without this feature conditional checks and iteration are required, resulting in longer, more error-prone code that leaves room for developer misinterpretation of what data needs abstracting. The feature does remove some of the room for developer error however it does have issues related with performance scaling, mainly around the callback function used for filtering, if this is under high load some unintended side effects can occur within the feature.

### References

www.w3schools.com. (n.d.). JavaScript Array filter() Method. [online] Available at: https://www.w3schools.com/jsref/jsref_filter.asp.

MDN Web Docs. (2019). Array.prototype.filter(). [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter.

‌
‌


### Event Handling

Event handling in JavaScript involves capturing and responding to user or system events, such as clicks or keyboard inputs. Event listeners enable the execution of specific code when said event occurs, enhancing interactivity and enabling custom input based commands in web applications.

```
process.on('SIGINT', function() {
    console.log( "\nGracefully shutting down from SIGINT (Ctrl-C)" )
    process.exit(0)
  })
```

Event handling handles the need for dynamic response within a web application. By allowing the execution of code in response to an event, it enhances the interactivity and responsiveness to the user allowing them edit their experience during application run time.

### References

developer.mozilla.org. (n.d.). Event handling (overview) - Event reference | MDN. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/Events/Event_handlers.

‌www.w3schools.com. (n.d.). JavaScript DOM EventListener. [online] Available at: https://www.w3schools.com/js/js_htmldom_eventlistener.asp.

‌



Client Framework Features
-------------------------

### Two-Way data binding

Vue.js' two-way data binding creates a seamless connection between the DOM and the data model. Using directives like `v-model`, it automatically synchs user input changes with underlying data, allowing real-time updates and eliminating manual event handling for user input to data fields.

`<input type="text" id="input1" name="user_id" class="form-control" v-model="inputs.inputUserID" aria-label="UserID" aria-describedby="inputGroup-sizing-default">`

The problem this is solving is the removal of the need for manual DOM manipulation and event listeners in Vue.js applications. Without it, additional code would be required to manually update the data model on every user input or interaction with the UI, leading to more error-prone code by allowing room for error. Because this feature handles the DOM for the developer it can however lead to some situations where the standard behavior of the v-model isn't sufficient, and shortfalls in the functionality of two-way data binding in Vue.js can be seen here.

### References

Laracasts. (n.d.). https://laracasts.com/discuss/channels/vue/issue-with-two-way-data-binding-in-vue-component. [online] Available at: https://laracasts.com/discuss/channels/vue/issue-with-two-way-data-binding-in-vue-component [Accessed 12 Jan. 2024].

‌DigitalOcean. (n.d.). Using v-model for Two-Way Binding in Vue.js. [online] Available at: https://www.digitalocean.com/community/tutorials/vuejs-v-model-two-way-binding.

‌v2.vuejs.org. (n.d.). Form Input Bindings — Vue.js. [online] Available at: https://v2.vuejs.org/v2/guide/forms [Accessed 12 Jan. 2024].

‌


### Conditional Rendering

Vue.js conditional rendering uses directives like `v-if` & `v-show` to dynamically control visibility and behavior of DOM elements based on criteria or conditions. It can help to improve rendering efficiency by selectively including or excluding elements from the DOM on form load.

```
<button @click="handleClick(index)">
        <div v-if="data.loading">
```

This feature makes the display logic of element rendering in Vue.js much simpler to use, allowing developers to conditionally show or hide elements with ease. Without this feature manual DOM manipulation would be required, resulting in more complex, error-prone, and less maintainable code for managing dynamic UI changes.

### References

Stack Overflow. (n.d.). Conditionally render a component on a click event in Vue JS. [online] Available at: https://stackoverflow.com/questions/72780072/conditionally-render-a-component-on-a-click-event-in-vue-js [Accessed 12 Jan. 2024].

‌vuejs.org. (n.d.). Conditional Rendering | Vue.js. [online] Available at: https://vuejs.org/guide/essentials/conditional.html.

‌www.w3schools.com. (n.d.). Vue v-if Directive. [online] Available at: https://www.w3schools.com/vue/vue_v-if.php [Accessed 12 Jan. 2024].

‌


### Event handling manipulation

Vue.js event handling utilises directives to bind methods to DOM events. Manually allowing developers to add or change default behaviors such as form submits or click events.

`<form @submit.prevent="submitForm">`

This is solving the problem of default DOM behaviors not having the required behavior a developer needs. In the above code example `.prevent` is used to precisely that means, to stop the form from submitting and refreshing on any DOM change. Without this feature developers lose all customisation of event logic and are forced to rely on traditional boilerplate event listeners, resulting in less declarative form handling.

### References

vuejs.org. (n.d.). Vue.js. [online] Available at: https://vuejs.org/guide/essentials/event-handling [Accessed 12 Jan. 2024].

GeeksforGeeks. (2023). Vue.js Event Handling. [online] Available at: https://www.geeksforgeeks.org/vue-js-event-handling/ [Accessed 12 Jan. 2024].

‌
‌


Client Language Features
------------------------

### JavaScript Destructuring Assignment

The JS destructuring assignment is used to declare and initialise multiple variables in a singular line. It simplifies the assignment of default values to properties within specific objects that may be contained within a Vue.js component.

```
data: {
    inputs: {
        inputUserID: '',
        inputKeywords: '',
        inputDescription: '',
        inputImage: '',
        inputLat: '',
        inputLon: ''
    },
    responseData: null
},

```

This feature is attempting to solve syntax complication issues when initialising multiple variables from an object. It enhances readability, concisely assigning default values to an object's properties when interacting with a data structure as seen in the code snippet.

### References

developer.mozilla.org. (n.d.). Destructuring assignment - JavaScript | MDN. [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment.

‌www.programiz.com. (n.d.). JavaScript Destructuring Assignment. [online] Available at: https://www.programiz.com/javascript/destructuring-assignment [Accessed 13 Jan. 2024].

‌

### Template Literals

A template literal in JS facilitates dynamic string creation by allowing for the embedding of expressions within `${}`. This concise syntax allows for efficient parsing of dynamic variables to a function or variable while improving readability and simplifying the concatenation of said functions and variables.

`axios.post('${serverURL}/item', inputData)`

The problem this solves is the one of cumbersome string concatenation. Before the introduction of template literals developers would have to use manual methods of concatenation such as `+` to achieve the same result, leading to error-prone clumsy code. This feature helps to improve interpolation, conciseness, and readability significantly improving string handling for developers.

### References

MDN Web Docs. (n.d.). Template literals (Template strings). [online] Available at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals.

‌www.digitalocean.com. (n.d.). Understanding Template Literals in JavaScript | DigitalOcean. [online] Available at: https://www.digitalocean.com/community/tutorials/understanding-template-literals-in-javascript [Accessed 13 Jan. 2024].

‌



Conclusions
-----------

(justify why frameworks are recommended - 120ish words)
(justify which frameworks should be used and why 180ish words)


