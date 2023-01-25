Web Programming
===============

Level 5


Description
-----------

Web technologies are a foundation of modern software. Web technologies facilitate networked applications that are easily deployable. Web technologies can facilitate realtime interaction/communication.

Students are to understand the foundations of web technology (server/client separation).
The focus of the module is to accrue practical web programming skills.
By understanding web foundation technologies, students will have the prerequisite knowledge to work with more advanced libraries.
This module is to be delivered using bare-bones IDEs, standard language libraries and common builtin browser development tools.


This module attempts to give students the opportunity to practically interact with a range of core web technologies:

* Modern HTML boilerplate structure
* HTTP Server
* WebSockets
* Document Object Model
* Modern CSS (including transitions and variables)
* HTML Canvas (including shape paths and requestAnimationFrame)
* Web Forms (POST)
* Browser Events
* Cookies/Sessions
* JSON
* Async requests
* HTML Offline Storage
* Simple Deployment mechanisms
* URL components (scheme, domain, path, hash, query string)
* BASE64 encoding (of images)


Once the students have engaged with the above technologies in a practical way, students are to use CDIO methodology to conceive, design and implement a simple practical project to demonstrate a range of skills acquired.
Template project ideas will be provided to support weaker students.
More advanced students will be encouraged to be creative with their implementation.
Students will be asked to demonstrate their understanding by adding a feature to another students' project. This will support students ability to read code and use industry standard tools for collaborating on a software project while ensuring that students are individually accountable for their work.

Complex datastores (sql) [databases] and Network infrastructure (https/certificates, DNS) [networking] are out of scope of this module, but should be mentioned.


Learning Objectives
-------------------

1. Develop the skills to independently develop and deploy a simple web application using foundation/standard technologies
2. Describe the purpose and use of a range of server and client foundation technologies
3. Engage with industry standard developer tooling


### Expanded

1. Understand the HTTP protocol
    * be able to describe the structure of a HTTP request and HTTP response
    * by implementing a HTTP sever from scratch using raw sockets
2. Understand WebSockets by implementing a WebSocket EchoServer and creating browser clients that can send messages via this server
3. Understand that webpages are based on a Document Object Model that can be manipulated with code (createElement, remove, querySelector)
4. Understand that DOM elements can be styled/animated with CSS (transition)
5. Understand that complex custom shapes can be drawn with code using Canvas
6. Understand that data can be POST'ed by forms. This can be stored and returned with a GET requests
7. Understand that server and client can share data with cookies
8. Understand that data structures can be encoded and decoded from strings (json)
9. Understand that all IO in browsers is performed by asynchronous non blocking calls
10. Understand that browsers have a range of build in api's e.g. offline storage, webcam, midi
11. Understand how to use developer tooling that is built into modern web browsers effectively
    * Network requests, Console/REPL, builtin debugger
12. Understand how to deploy simple web-apps
13. Understand that rather than raw web technologies are a foundation. Complex problems often require the structure of established frameworks (linking to next module 'Programming Languages and Frameworks')
14. Understand the tools software engineers use to collaborate on code projects (version control)


Learning and Teaching Strategies
--------------------------------

* The module will be taught in a lab using mixed mode delivery as required, so that theory, practical and discussion can take place as required within one session.
* Students will demonstrate progress in their assignment and will have the opportunity to gain feedback of their understanding in each session through the artefacts they are working on.
* Students are to use version control and engage with 'professional behaviours' like code review and pair programming
* In industry, it is expected that developers engage with code-base's they are unfamiliar with add features. The final assessment of this module is for students to add a feature to another students project (preferably via a pull-request for students to understand the tooling professional developers collaborate on software).


Indicative Assessment 
---------------------

| Name | Type | Module % | Word equivalent |
|-|-|-|-|
| Guided Projects | Digital Artefact | 25% | 1000 |
| Personal Project | Digital Artefact + Code Review Presentation to Peers | 50% | 2000 |
| Feature Addition to another students personal project | Digital Artefact | 25% | 1000 |


Progression
-----------

* This module forms the foundation for moving on to larger frameworks and more complex development toolchains (see Programming Frameworks)


Supporting Materials
--------------------

Template/Example Projects include:

* HTTP Server
    * Serve static files and generate some form of dynamic content
    * [python](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/net/http_server.py) [java](https://github.com/calaldees/javalib/blob/7326a70c2914f11335809766a1b13d1f41a5eac3/lib/Utils/Utils/Apps/WebServer.java)
* HTTP Message Board
    * WebForms POST, GET, Cookies
    * [python](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/web/messages.py) [php](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/web/messages.php)
        * Potential to be expanded with sqlite datastore?
* HTTP Shopping Basket
    * Cookies
    * BASE64 encoded images in json
    * (example TODO)
* Network Chat
    * WebSockets, Events
    * [js](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/net/chat.html) [python](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/net/chat.py) [java](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/net/chat.java)
* Network Paint
    * WebSockets, JSON, Canvas
    * [js](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/net/paint.html) [python](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/net/paint.py)
* Simple Chromecast
    * WebSockets, DOM, Events
    * [js](https://github.com/calaldees/TeachProgramming/blob/9a33e0254e4f9f6330654004208f036b63fa2581/teachprogramming/static/projects/net/disco.md)
* Fly the Copter Network?
    * (example TODO) (network every 3 or 4 frames)
Each example is to be short (less than 100 lines) and require no external libraries (with the exception of raw WebSocket handling)
* WebSocket Echo server
    * provided to students [example](https://github.com/calaldees/channelServer) (can be simplified for class use)


Unsorted Notes
==============

De-scoped ideas
---------------

Personal Project - Require documentation "how to run"
* Certificates?
* DNS?


Validation
----------

Snippets from our validation documents that align with this module

> software  development  using  a  variety  of  different  tools  and  techniques  alongside  appropriate  professional  practice.  
* Develop your understanding of the range and scope of use of Computer Science;
* Enable you to work through the entire software development lifecycle, using modern technologies, in order to produce a solution to a given problem; 

Aims (Working towards)
* > 2. create a substantive piece of individual work using all the skill sets acquired to  solve  a  Computer  Science  problem  through  the  use  of  appropriate  software;
* > 5. reflect on working co-operatively as a member of a team to work on an issue related to your programme, recognising and using the different strengths and abilities of fellow team members;
* > 7. apply appropriate   industry   standards,   theories   and   concepts   for   the   specification,   design,   implementation,   management   and   evaluation   of   computer systems;
* > 8. effectively and efficiently use a range of software tools for the documentationand development of computer systems.

> You will take  part  in  a  large  quantity  of  active  learning  using  group  projects  and  problem-based learning with industrial involvement.  

> The CDIO scheme is a way of helping you to become workplace ready and have commercial awareness in many ways.  You will learn to work at all the stages of the typical product or service lifecycle.

> 1. Using  industrially  recognised  and  relevant  technology  and  examples  whenever  possible.
> 4. Building the level of complexity of problems, challenges and solutions over the period of the degree programme.

accreditation
> there is no accreditation with external bodies at this stage, but accreditation will be sought from British Computer Society and the programme has been designed with this accreditation in mind.

NOTE: Would like to consider - verbal presentation assessment
* > 6. devise efficient computing models to solve sophisticated computing problems and  communicate  these solutions  succinctly  and  accurately  to  a  range  of  audiences;

Other Certifications this module aligns with
--------------------

* Udemy [Web Development Masterclass & Certifications](https://www.udemy.com/course/become-a-certified-web-developer/)
    * £85
    * 55 hours of video (+? implementation time, 25 lab exercises + 1 project)
* coursera.org
    * by University of Michigan - [Web Design for Everybody: Basics of Web Development & Coding Specialization](https://www.coursera.org/specializations/web-design)
        * £200? 100 hours
    * by Johns Hopkins University - [HTML, CSS, and Javascript for Web Developers](https://www.coursera.org/learn/html-css-javascript-for-web-developers)
    * by University of California, Davis - [Introduction to Web Development](https://www.coursera.org/learn/web-development)
    * By Meta 
        * [Meta Back-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-back-end-developer)
            * £300? 200 Hours
        * [Meta Front-End Developer Professional Certificate](https://www.coursera.org/professional-certificates/meta-front-end-developer)
            * £300? 200 Hours
* LinkedIn Learning
    * [Getting Started as a Full-Stack Web Developer](https://www.linkedin.com/learning/getting-started-as-a-full-stack-web-developer)
        * £30
        * 50 Videos
        * Certificate of completion to add to your LinkedIn profile
* openclassrooms.com - University of Massachusetts Global Partnership - [Web Developer](https://openclassrooms.com/en/paths/555-web-developer) [pdf](https://openclassrooms.com/en/paths/555-web-developer/pdf)
    * Full time 6-months - 400 hours? 1000 hours
    * Hired or refunded
    * 'Web Programming' combined with 'Programming Frameworks' (Vue.js, Express, Mongo)
* eCornell cornell.edu university - [Web Design and DevelopmentCornell](https://ecornell.cornell.edu/certificates/technology/web-design-and-development/)
    * $4000 3months - part time - 150hours?
