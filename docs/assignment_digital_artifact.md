Assignment - Digital Artifact
=============================

Overview
--------

Create a digital artifact. This will be 60% of this module.

* You will demonstrate you can work towards a formal spec and use automated tests to produce a working system to a business specification
* You will use 3 frameworks for 3 separate problem domains (server, client, layout)


Intended Learning Outcomes
--------------------------

* LO 1. Demonstrate an understanding of the concept of a Framework in general, a Framework used for Programming, and a Framework used for software Testing.
* LO 3. Synthesise a small digital artefact using a well-formed programming framework.


Submission Guidance
-------------------

* GitHub Public Fork (auto snapshot)
    * You will clone a public fork of:
        * [https://github.com/calaldees/frameworks_and_languages_module](https://github.com/calaldees/frameworks_and_languages_module)
    * At the datetime of the deadline a snapshot of your fork will automatically be taken
* Submit a zip file to TurnItIn
    * In addition to GitHub, You need to formally submit a zip file with the contents of your repository to TurnItIn
    * zip files should be no more than 5mb. If it is more than 5MB something is wrong! talk to your module lead
    * GitHub can automatically generate a zip file when you "Create a new [release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository)"




Marks Overview
--------------


| Assignment | Section | Marks (Total 60) |
|---|--------------------------------|---:|
| 1 | Server tests                   | 12 |
| 1 | Server framework (independent) | 10 |
| 1 | Server documentation           |  3 |
| 1 | Client tests                   | 12 |
| 1 | Client framework (independent) | 10 |
| 1 | Client documentation           |  3 |
| 1 | Visual framework               |  5 |
| 1 | Visual framework (independent) |  5 |
|   |                                | 60 |

1 mark = 1% of module

Marks for the module will be returned to you via TurnItIn as a 'percentage'. e.g: If you achieved `30/60` your returned mark would be `50%` derived by the formula `(30/60)*100`


Scenario
--------

Freecycle-Inc have a working prototype implementation of their proposed service.

[https://github.com/calaldees/frameworks_and_languages_module](https://github.com/calaldees/frameworks_and_languages_module)

The repository provides:

* An OpenAPI3 Specification for the server service `openapi.yaml`
* Complete working reference implementations
    * This `example_` reference implementations were built with NO frameworks to allow you to critique/understand why frameworks are used (see Assignment Technical Report)
    * `example_server` A complete reference server implementation that runs in a container (you re-create this functionality) 
    * `example_client` A reference client implementation (that uses `example_server` container)
* Automated Tests  
    * These test run as GitHub actions as part of CI
        * `test_server` An automated test container that tests the server implementation's conformance to the OpenAPI3 spec
        * `test_client` A set of browser tests (cypress), to document the expected client/user flows
* Your implementations
    * `./server/` the stub folder for your server container implementation
    * `./client/` the stub folder for your client container implementation


Task
----

* You are to replace the stub `./server/` and `./client/` implementations with new implementations that pass the server and client automated test suites.
* Your solutions must run in containers on CI
* no tests passing == 0 marks
* Your solutions can use any programming language or frameworks as long as the tests pass


Guidance
--------

* It is not required for your server service to have a persistent data model
    * You can use a data persistence model if desired, but There are no extra marks allocated to this
* There is no requirement for any user authentication
* There is no requirement for scale
    * The system will be operating with less than 100 items (pagination is not needed)
* You will be allocated marks for partial solutions (based on tests that pass)
* You are working towards being a professional software engineers. It is expected that you share and discuss your solutions with peers throughout this assignment.
* Modular assignment (use of reference/example implementations)
    * The assignment has been split into server and client. You can gain marks for these independently. You do not need to complete a working server before you move on to the client or vice versa.
    * If you are struggling with your server you could construct your client against the working reference server in `example_server`. See `Makefile` `run_your_client_with_example_server` and `test_your_client_with_example_server`. 
    * You can also verify your server implementation against the reference client. See `Makefile` `run_example_client_with_your_server` and `test_example_client_with_your_server`
    * You can gain marks for the use a visual framework without completing a working server or client (see visual framework below for details)

### Citations, Referencing and Acknowledging sources

* It is expected that you document your sources/references for your code (this includes discussions with dates with classmates, url's to stack overflow resources and framework documentation)
    * It is typical to have citations inline with code (not at the end of a file or document) [e.g.](https://github.com/calaldees/frameworks_and_languages_module/blob/main/test_server/test_api.py#L17)2
        * Referencing stackoverflow as a source (use the `share` link)
            * ```python
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
                ```
    * Some sharing of solutions is acceptable and normal, but are almost always supported by referencing the developer @USERNAME conversions in-line in code comments e.g.
        * ```javascript
            NEXT_ID = max(ITEMS.keys()) + 1  // Crude placeholder for generating unique id's after discussions with @calaldees
            ```
        * ```javascript
            xxxx; // discussed unique id allocation with @calaldees. The old implementation manifested id conflict. Opted for tracking `last_generated_id` as a variable to prevent id reuse.
            ```
        * ```javascript
            xxxx; // handling of ISO datetime inspired by @calaldees https://github.com/calaldees/frameworks_and_languages_module/blob/83e93cc29a2158b17040faf0fb77dfe3ff889a14/example_server/app/views.py#L45
            ```
    * Do NOT put all of your references at the bottom of a code file or in a separate document. These should be _inline with code_ see above


Mark Breakdown
--------------

### Server Tests

0 automated tests pass == 0 marks.
no framework == 0 marks.

* Automated Test (12 marks - each test is .5 of a mark) (see `/test_server/test_api.py`)
    * Port open
    * serves html on `/`
    * POST `/item/`
        * complete 201
        * incomplete 405
        * ids generated are unique
    * GET `/item/{id}`
        * json
        * fields
        * 404
        * iso date
    * GET `/items/`
        * json
        * fields
        * from POST
    * DELETE `/item/{id}`
        * 204
        * 404
    * CORS
        * OPTIONS 204 `/`
        * `/items/` headers
    * Bonus - GET `/items/` - additional filters (not used by web client)
        * filter username
        * filter location
        * filter date_from
        * filter keywords

12 marks total


### Client Tests

0 automated tests pass == 0 marks.
no framework == 0 marks.

* Automated tests (12 marks) (see `test_client/cypress/freecycle.cy.js`)
    * 200 (1 mark)
    * has `Freecycle` text (1 mark)
    * has text `<input>` and `<button>` (1 mark)
    * submit + see item (6 marks for single test)
        * `?api=` from query string (1)
        * button actions `POST` (2)
        * update list `GET` (2)
        * `<ul>` populate with data (1)
    * delete + remove (3 marks for single test)
        * id in `<li>` data (1)
        * `DELETE` called (1)
        * update list `GET` (1)

12 marks total


### Server framework (independent)

* Optional! For advanced students aiming for 50% or more
* Independent (use of) Framework (Server and Client)
    * You will have been given a worked example of a server in _ExpressJS_/_VueJS_/_Bootstrap_ as part of your lectures
    * To access the marks for independent working, you must select and use a different framework. You can pass this assignment with 55% by sticking with the worked example technologies.
    * Some students may be advanced enough to independently use a new framework/language from the start of the module. Other may need to gradually move up to this.
    * It is recommend that students have a secure understanding of an api and workflow by completing a working solution in _ExpressJS_/_VueJS_/_Bootstrap_ and then move on to attempt the use of another framework independently. You will get marks for independent work even if your independent solution is incomplete. If you chose to complete _ExpressJS_/_VueJS_/_Bootstrap_ solution and then moved on to another framework, it would be wise to commit independent work to a placeholder/working folder e.g. `server_independent` or `server_fastapi` while you develop your independent solution.

* Use of a language or framework that was not under direct instruction from lectures
    * Use of framework features (4 marks)
        * comment with text `framework feature` and url to framework feature documentation/example
    * Use of language features (list comprehensions, async etc) (4 marks)
        * comment with text `language feature` and url to language feature documentation/example
    * Conciseness (verbose? unneeded intermediaries? readable) (1 mark)
    * File/folder structure (sensible names, use of framework conventions) (1 mark)

10 marks total


### Client framework (independent)

* See "Server framework (independent)" (above)

10 marks total


### Server documentation

* README sufficient to explain, launch, test, use  (1 mark)
* Comments in code describe/explain functionality (1 mark)
* minimum 24+ Commits - well worded and technical (1 mark) (12 weeks == average 2 commits per week)
* Disclose your sources - what conversations with other members of the group contributed to this code with dates and @githubUsernames

3 marks total


### Client documentation

* See Server documentation (above)

3 marks total


### Visual framework

no framework == 0 marks (even if it looks nice).

It is possible to use a visual framework and gain full marks for this section. You could create a stub client html structure that does pass the client tests but still uses a visual framework with the criteria below.

* Tutor verified (5 marks)
    * Navbar/Title (1 mark)
    * styled
        * inputs and submit button (1 mark)
        * item/card (1 mark)
    * Responsive to mobile (2 mark)

5 marks total


### Visual framework (independent)

* Optional! For advanced students aiming for 80% or more
* You independently used a framework that was not under direct instruction (5 marks).
    * comment with text `layout framework feature` and url to framework feature documentation

5 marks total
