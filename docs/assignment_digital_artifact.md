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
| 1 | Server tests                   | 16 |
| 1 | Server framework (independent) |  5 |
| 1 | Server documentation           |  4 |
| 1 | Client tests                   | 16 |
| 1 | Client framework (independent) |  5 |
| 1 | Client documentation           |  4 |
| 1 | Visual framework               |  6 |
| 1 | Visual framework (independent) |  4 |
|   |                                | 60 |

1 mark = 1% of module


Scenario
--------

Freecycle-Inc have a working prototype implementation of their proposed service.

[https://github.com/calaldees/frameworks_and_languages_module](https://github.com/calaldees/frameworks_and_languages_module)

The repository provides:

* An OpenAPI3 Specification for the server service `openapi.yml`
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
* It is expected that you document your sources/references for your code (this includes discussions with dates with classmates, url's to stack overflow resources and framework documentation)


Mark Breakdown
--------------

### Server Tests

0 automated tests pass == 0 marks.
no framework == 0 marks.

* Automated Test (16 marks) (see `/test_server/test_api.py`)
    * Port open (1 mark)
    * serves html on `/` (1 mark)
    * POST `/item/`
        * returns json
        * complete 201 (1 mark)
        * incomplete 405 (1 mark)
        * ids generated are unique (1 mark)
    * GET `/item/{id}`
        * json (1 mark)
        * fields (1 mark)
        * 404 (1 mark)
        * iso date (1 mark)
    * GET `/items/`
        * json (1 mark)
        * fields (1 mark)
        * from POST (1 mark)
        * filter username (1 mark)
    * DELETE `/item/{id}`
        * 204 (1 mark)
        * 404 (1 mark)
    * CORS
        * OPTIONS 204 `/` (1 mark)
        * `/items/` headers (1 mark)
    * Bonus - GET `/items/` - additional filters (not used by web client, for bonus marks)
        * filter location
        * filter date_from
        * filter keywords

17 marks total


### Client Tests

0 automated tests pass == 0 marks.
no framework == 0 marks.

* Automated tests (15 marks) (see `/test_client/cypress/freecycle.cy.js`)
    * 200 (1 mark)
    * has 'Freecycle' text (1 mark)
    * has Text input and button (2 mark)
    * submit + see item (7 marks for single test)
        * api_url from query string (1)
        * button actions post (2)
        * auto fetch list (2)
        * ul populate with data (2)
    * delete + remove (4 marks for single test)
        * button on item (1)
        * id in li data (1)
        * delete called (1)
        * list updated (1)
* Tutor verified (1 mark)
    * Displays real image url (1 mark)

16 marks total


### Server framework (independent)

* Independent (use of) Framework (Server and Client)
* Optional! For advanced students aiming for 80% or more

* Use of a language or framework that was not under direct instruction from lectures (5 marks)
    * Use of framework features (1 mark)
    * Use of language features (list comprehensions, async etc) (1 mark)
    * Conciseness (verbose? unneeded intermediaries? readable) (1 mark)
    * File/folder structure (sensible names) (1 mark)

5 marks total


### Client framework (independent)

* See Server framework (independent) (above)

5 marks total


### Server documentation

* README sufficient to explain, launch, test, use  (1 mark)
* Comments in code describe/explain functionality (1 mark)
* minimum 24+ Commits - well worded and technical (1 mark) (12 weeks == average 2 commits per week)
* minimum 4x References snippets/tutorial urls inline (1 mark)
    * Disclose your sources - what conversations with other members of the group contributed to this code with dates and @githubUsernames

4 marks total


### Client documentation

* See Server documentation (above)

4 marks total


### Visual framework

no framework == 0 marks (even if it looks nice).

* Tutor verified (6 marks)
    * Navbar/Title (1 mark)
    * styled
        * inputs (1 mark)
        * buttons (1 mark)
        * item/card (1 mark)
    * Responsive to mobile (2 marks)

6 marks total


### Visual framework (independent)

* Optional! For advanced students aiming for 80% or more
* You independently used a framework that was not under direct instruction (4 marks).


4 marks total
