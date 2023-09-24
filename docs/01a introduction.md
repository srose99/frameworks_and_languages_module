Introduction (2 hours)
============

* Learning Objectives
  * Understand the module content and assessment content
  * Understand the core technologies we will be using

Who am I?
---------

* 7 Years teaching Computing in secondary schools
    * A-level, Linux, networking, game programming. Part of transition from ICT to Computing.
* 10 years Software engineering
    * 2 years - Lead developer of a Citizen Journalism startup
    * 6 years - Global Radio (full stack web, android dev, lead test and internal tooling engineer)
    * 6 months - Financial investment platform CI infrastructure
    * 1.5 years - NHS Genome processing pipeline for cancer and rare disease analysis
* 5 years Lecturer in Education (teacher training)
* 3 years Lecturer in Computing

* Side projects
  * DMX Stage lighting and projector sys (with 3d stage visualiser)
  * Karaoke System for mobile phones
  * Lots of other rubbish
  * Won a number of commercial hack events (2009 to 2012)


Module Overview
---------------

<sub>Hint: Take notes .... seriously! ... get a notepad, or open a text document. Get ready!</sub>

TASK: (10min) 
* Find - the module handbook - read
* Whiteboard - What do you think is in this module?

## Module Aims
To develop the student’s understanding of the fundamental concepts of Programming Frameworks and Languages. 
This module supports the Implement and Operate elements of the CDIO model.

* [module_handbook.md#employable-skills](./module_handbook.md#employable-skills)

### Intended Learning Outcomes 
By the end of the module students should be able to:
1. Demonstrate an understanding of the concept of a Framework in general, a Framework used for Programming, and a Framework used for software Testing
2. Critically evaluate the effectiveness of a particular framework for an application and platform
3. Synthesise a small digital artefact using a well-formed programming framework

Whiteboard in half: words to describe (10min)
* What is a [programming language](https://en.wikipedia.org/wiki/Programming_language)?
* What is a [software framework](https://en.wikipedia.org/wiki/Software_framework)?

The sign of an amateur:
> _TECH_XYZ_ is rubbish
This module will help develop an important part of your professional skill-set: 
* The ability to discuss and reason about technology choices

* The ability to use a professional toolchain (CI)
* Understand the basic elements of full stack web development


### Definitions

* Language
  * A formal structure to describe machine behaviour
* Framework
  * Inversion of control
    * It calls you, rather than you call it
* Tests that are
  * Automated
  * Document business requirements/spec
  * Document correct flow

### How will we learn

1. Focus on a business engineering problem with real industry tools
  * Hands-on each week with a range of tools
2. Discussion
  * Real engineers can discuss/reason about technology
  * Pair programming (you have to verbally describe your rational)
3. Multiple languages/frameworks (they are all just tools that you can learn)
  * [langauge_reference.html](https://computingteachers.uk/static/langauge_reference.html)
4. Self directed (Level 6) 150 hours
  * You can read + action on your own now


#### Level 6
* Level 4 - You are told what to do
* Level 5 - Supported developing competency in a range of problem domains
* Level 6 - You are able to self direct (with support)

* My role is NOT to have all the answers
* My role is to facilitate your transition towards a skilled professional

Side Note: Employment. Popular languages? Less popular or new languages? Mark scheme 50%+

#### Session Overview - Online/Campus

Task: Look on blackboard at session list

* Each week
    * 09:00 - 13:00 Lab
    * 14:00 - 18:00 Supervised Workshop Support
      * First 3 week (vital)
      * can be flexible later in the module


Starting point Quiz (15min)
-------------------

How much do you as a class know already?
(They are deliberately challenging questions)

https://b.socrative.com/login/student/
`CALLAGHAN1818`

(Go over each question and why it was asked)


Key Terminology (Today)
---------------
* Cloud based IDE
* Bash/linux commandline
* Makefile
* Containerisation
* Git version control (from commandline)
* GitHub Actions (CI) (to run tests - triggered by `git push`)

Today
-----
* Morning
  * Overview of assignemnts and core tools
* Afternoon
  * HTTP (curl and other methods)
  * JSON and working with dynamic data structures
  * OpenAPI spec


Assessment 1 - Digital Artefact - Familiarisation (2 hour)
------------------

### Read (10 min)

* TASK: Look at Assignment 1 - read it - discuss
* TASK: Look at Assignment 2 - read it - discuss


### Demo (15 min)

* Demo working server on Cloud VSCode IDE
  * https://codespaces.new/calaldees/frameworks_and_languages_module
  * https://gitpod.io/#https://github.com/calaldees/frameworks_and_languages_module
```bash
make
make run_example_server_client
# https://8001-xxxx.ws-eu67.gitpod.io?api=https://8000-xxxxx.ws-eu67.gitpod.io
```
put link on blackboard - class interact


### Overview

* Implement Web App
  * Server Framework (data api service)
  * Client Framework (browser app logic)
  * Client Layout Framework (styles + visuals)
* Assignments
  * Set Today
  * Assignment 1 - Digital Artifact - Due 11th December
  * Assignment 2 - Technical Report - Due 8th January
* Tools
  * Cloud based IDE + containers
  * OpenAPI Spec


Run it yourself (30 min)
------------------------

* Cloud based VSCode IDE
  * GitHub CodeSpaces
    * [120 hours a month](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces)
  * GitPod
    * [50 hours a month](https://www.gitpod.io/pricing)
    * Create account with GitHub login

Demo:
1. The IDE
2. The Interaction (public port)
  * launch containers
  * make ports public
3. Add an item with the web interface
  * Remember to add the querystring for the server `?api=` e.g. `https://8001-xxxx.ws-eu67.gitpod.io?api=https://8000-xxxxx.ws-eu67.gitpod.io`
4. Access another persons public port + Add an item to another persons server
5. Run the tests
  * `make test_example_server`
  * `make test_example_client`
    * (Demo this natively to show Cypress interface. We will return to this in session 4 in more detail)


Task: Fork + Run + Commit (30 min)
----
1. Fork your own copy of the repo (description)
  * Allow CI
    * And enable _GitHub Actions/Workflows_
2. Start a Cloud based IDE for YOUR FORK 
  * `https://codespaces.new/<USERNAME>/<REPO_NAME>`
  * `https://gitpod.io#PASTE_YOUR_GITHUB_FORK_URL_HERE`
3. Make a commit to `/server/Dockerfile` and see CI
  * ```Dockerfile
      FROM python:alpine
      WORKDIR /app/
      COPY . .
      CMD ["python", "-m", "http.server", "8000"]
      ```
  * `git status`
  * `git diff`
  * `git commit -a`
  * `git push`
4. See you test report online on GitHub
  * GitHub -> YOUR FORK -> Actions -> `test_server` -> server-junit
  * or
  * commit -> red 'x' next to commit -> test_server/server-junit (push)


Workspace Hygiene
------------------
* Commit + push: every time any progress is made (even one or two lines of code)
  * Your workspaces are ephemeral and should be disposed periodically - workspaces are not a datastore
* Stop your cloud IDE's (save your cloud hours)
  * `gp stop`
  * `gh codespace stop`
* Manage/Delete unused workspaces (remove unused workspaces)
  * https://github.com/codespaces/
  * https://gitpod.io/workspaces

* (Optional)
  * [GitHub Student Developer Pack](https://education.github.com/pack) - with cccu address + cccu id 


Plenary (30min)
-------

* What is Assignment 1
  * How will you be assessed
* What is Assignment 2
  * How will you be assessed
* Look at the session overview outlines
  * How will you be supported
* Review Key Terminology
  * What is a container?
  * Why do we construct software in containers?
* Why is this module level 6?
* Why is this module relevant/important?
* How are you feeling?


Expectations
------------

### Expected marks
* Weak students
  * Turn up every week
  * Are supported in afternoon sessions with complete worked examples in expressjs, vuejs and bootstrap
  * Will all pass 40% to 50%
* Mid tier students
  * Complete assignment 1 with supported frameworks expressjs, vuejs, bootstrap by November
  * Spend time exploring/implementing another framework independently, may be partially complete and only pass some of the tests
  * Will pass at 55% to 65%
* Top tier students
  * Are present for the expressjs, vuejs, bootstrap examples (but they can be skipped for the truly l33t). 
  * Full implementation across different languages independently.
  * Will pass at 75%+
* Students that don't attend the afternoon support sessions
  * Don't waste my time asking for help the week before the assignment is due

### Working day?
* I/we are here 09:00 to 18:00 Mondays
* Welcome to a full time job
* If you want to be a software engineer, expect this every day, with only 20 days holiday a year until you are 68

### Who are you working for?
* You will spend the rest of your life working for someone else and working for their objectives
* Currently you are working for you
  * If you don't utilise this time now, we call this 'friendly fire'

### Job prospects

This module has the most industry aligned skills in the entire degree suite.
A combination of this and your final year project are going to be the linchpin modules of your entire degree.
Put in the time.


Unsorted
========

  1. Module overview
    1. Assignments
      1. Writeup justification
      2. OpenAPI + Tests + Containers
    2. What level 6 means
    3. How do you analyse a framework (explicit)
    4. Languages
    5. Frameworks
    6. Tests
  2. Practical
    1. Clone and commit
    2. gitpod
    3. Containers
      1. build/run
      2. compose
    4.  Make HTTP Server
      1. python/java
  3. Homework: 


---

Initial audit notes


Updated


1. What is this? (not including subsets)
    * ```json
        {"code": 200, "message": "something happened", "payload": ["a", "b", "c"]}
        ```
    1. python
    2. javascript
    3. json (X)
    4. yml
    5. xml
2. What are these?
    * GET, POST, DELETE, PUT
    1. Database operations
    2. Common language commands
    3. HTTP request methods (X)
    4. Part of the OpenAPI spec
3. What is the difference between virtualisation and containerisation?
    * Virtualisation is simulating an entire machine, Containerisation is an isolated environment managed by the kernel (X)
    * Virtualisation is the emulation of an operating system, Containerisation is a virtual system
    * Virtualisation runs inside another process, Containerisation is running on the host
    * Virtualisation runs on your local machine, Containerisation runs remotely
4. What is an event loop?
    1. A `while` loop
    2. A core game/ui loop that process's each frame in realtime
    3. A technique for handling user input efficiently at a low level
    4. A way for single threaded languages to mimic/utilise concurrency (X)
5. Which of these is a _functional_ language
    1. TypeScript
    2. C#
    3. Haskell (X)
    4. Prolog
    5.  Java
6. What are WebSockets used for?
    1. Downloading files from websites
    2. Used to serve websites sites via HTTP on a known port
    3. WebSockets are an abstract concept based on REST
    4. Browser based apps to have persistent bi-directional communication (X)
    5. Accelerates websites with use of more modern protocols
7. `git pull --rebase` is used for
    1. Refreshing a repository content with the upstream
    2. Replaying local commits over remote changes to make a linear history (X)
    3. Pulling and merging remote commits
    4. Rebase-ing creates a separate branch to merge changes
8. What is this?
    * ```markdown
        ## Title
        paragraph
        * thing1
        * [example](http://example.com/)
        ```
    1. A linux file descriptor
    2. Markdown (X)
    3. LaTex
    4. Python
    5. HTML



Notional machine of how twitter works?
