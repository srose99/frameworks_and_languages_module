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

* You will clone a public fork of:
    * [https://github.com/calaldees/frameworks_and_languages_module](https://github.com/calaldees/frameworks_and_languages_module)
* You will be working in own public GitHub forked repository. At the datetime of the deadline a snapshot of your fork will automatically be taken. In addition, You need to formally submit a zip file with the contents of your repository to TurnItIn for a formal audit trail. You will be provided with a TurnItIn coversheet.

* see the folder for your solution below


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

### Citations, Referencing and Acknowledging sources

* It is expected that you document your sources/references for your code (this includes discussions with dates with classmates, url's to stack overflow resources and framework documentation)
    * It is typical to have citations inline with code (not at the end of a file or document) [e.g.](https://github.com/calaldees/frameworks_and_languages_module/blob/main/test_server/test_api.py#L17)
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
    * Some sharing of solutions is acceptable and normal, but are almost always supported by referencing the developer conversion in code e.g.
        * > // discussed unique id allocation with @calaldees. The old implementation manifested id conflict. Opted for tracking `last_generated_id` as a variable to prevent id reuse.
        * > // handling of ISO datetime inspired by @username http://PERMALINK
    * Do NOT put all of your references at the bottom of a code file or in a separate document. These should be _inline_ see above


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

* Independent (use of) Framework (Server and Client)
    * You will have been given a worked example in a framework (expressjs?) as part of your lectures. To access the marks for independent working, you must select and use a different framework
* Optional! For advanced students aiming for 50% or more
    * It is strongly recommended that most student create a working solution (expressjs?) before you move on to investigating and using another framework

* Use of a language or framework that was not under direct instruction from lectures (5 marks)
    * Use of framework features (3 marks)
        * comment with text `framework feature` and url to framework feature documentation
    * Use of language features (list comprehensions, async etc) (3 marks)
        * comment with text `language feature` and url to language feature documentation
    * Conciseness (verbose? unneeded intermediaries? readable) (1 mark)
    * File/folder structure (sensible names, use of framework conventions) (1 mark)

10 marks total


### Client framework (independent)

* See Server framework (independent) (above)

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
