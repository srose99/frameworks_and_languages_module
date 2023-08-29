Assignment - Technical Report
=============================

Overview
--------

Create a 1600 word technical report.
This will be 40% of this module.

* You will demonstrate your understanding of the frameworks and languages you have experimented with in your _digital artefact_ assignment
* You will use domain specific and technically accurate language/terminology


Intended Learning Outcomes 
--------------------------

* LO 1. Demonstrate an understanding of the concept of a Framework in general, a Framework used for Programming, and a Framework used for software Testing.
* LO 2. Critically evaluate the effectiveness of a particular framework for an application and platform.


Submission Guidance
-------------------

* You will clone a public fork of:
    * https://github.com/calaldees/frameworks_and_languages_module
* You will be working in own public GitHub forked repository. At the datetime of the deadline a snapshot of your fork will automatically be taken. In addition, You need to formally submit a `pdf` to TurnItIn for a formal audit trail.
* It is industry practice to keep technical documentation alongside program code in the same code repository
    * Project documentation is often written in `Markdown`
* A Markdown report template has been provided [`./technical_report.md`](https://github.com/calaldees/frameworks_and_languages_module/blob/main/technical_report.md)
* You will edit/commit `technical_report.md` markdown file in-place in your cloned fork repository. (do not rename the file)

### Converting MarkDown to PDF for TurnItIn submission

```bash
alias pandock='docker run --rm -v "$(pwd):/data" -u $(id -u):$(id -g) pandoc/latex'
pandock technical_report.md -o technical_report.pdf
```
* from https://hub.docker.com/r/pandoc/core



Marks Overview
--------------

* The rubric is marked from 0 to 100
* 1600 words
    * Code blocks and references do not contribute to word count
* Your writing should be short, sharp, technical and meaningful
    * Make a clear point every 40-ish words


Scenario
--------

* Freecycle-Inc have an existing working prototype for their FreeCycle platform with tests. 
* The business executives can see the existing prototype 'working'. They want to continue to expand the existing solution `./example_server/` `./example_client/` into a full commercial product.
* As a "Software Engineer" You are to create a "Technical Report" for the business leadership.
* You have explored/created/used a range of frameworks by creating example implementations (This is what you produced for Assignment 1)    
* Your report should
    * Explain why the current prototype `./example_server/` `./example_client/` (without frameworks) should not be used as the foundation for future enhancements.
    * Explain the features the frameworks offer (referencing technical documentation for those features)
        * Give code examples of these features from your experiments
    * Explain the features the language used by the framework offers
        * Give code examples of these features from your experiments
    * Use correct technical domain specific terminology
    * Reference your sources of information (Documentation for frameworks/languages, tutorials, opinion blogs comparing frameworks or evangelising a framework, etc)
  
Produce a summary technical report to the business directors (1600 words total).


Suggested Report Structure
--------------------------

### Introduction

* A summary of the purpose of this report, it's intended audience, an overview of the content.

### Critique of framework-less prototype

* A technical critique of why the existing prototype implementation is not fit for business use
    * `./example_server/` Server prototype critique
    * `./example_client/` Client prototype critique
* Each prototype critique should contain
    * A code snippet example demonstrating the feature/pattern
    * Explain why this pattern is problematic

### Framework Features

Describe the features of the frameworks and explain the problem that they are solving.

* Headings
    * 3 * Server framework features
    * 3 * Client framework features
* Each feature should contain
    1. Technical description of the feature
    2. A code block snippet example demonstrating the feature 
        * code blocks do not count towards word count
        * If you should additionally 'permalink' to the snippet in your own code from assignment1
    3. Explain the problem this feature solving (why was the feature created), benefits/problems
    4. Provide reference urls to your sources of information about the feature
        * references do not count towards word count

### Language Features

Describe the features of the language and explain the problem that they are solving.

* Headings
    * 2 * Server language features
    * 2 * Client language features
* Each feature should contain
    * (see above)
* To access the higher mark bands, the server and client should be different languages for you to demonstrate your wider knowledge of language differences.



Guidance
--------

* Level of Expectation
    * Realistically; You are not a lead developer. You are not expected to write this to a true industry standard. You are trying to demonstrate to an external examiner your knowledge and understanding of these technologies.
* Technical reports heavily used bullet points. You do not need to write in full english paragraphs all the time.
* Formative feedback of written work will be provided throughout module delivery.
    * It is expected that you will be incrementally working on your writeup (assignment2) alongside your digital artifact (assignment1) and committing regularly.
* Your justifications need to be supported with references. 
    * Show links to developer documentation, blog articles and case studies that support your technical assessment/recommendations.
    * Note: with _Academic Writing_ it is an institutional policy to use Harvard style referencing.
        * Most of the references will be url's in the form:
            * Example 1:
                * inline `(Using Express middleware, no date)`
                * in bibliography `Using Express middleware (no date). Available at: https://expressjs.com/en/guide/using-middleware.html (Accessed: 9 August 2023).`
            * Example 2:
                * `(Dreimanis, 2021)`
                * `Dreimanis, G. (2021) “Phoenix: An Introduction to Elixir’s Web Framework,” Serokell Software Development Company [Preprint]. Available at: https://serokell.io/blog/introduction-to-phoenix (Accessed: 9 August 2023).`
        * Read about referencing URLs at:
            * https://www.scribbr.co.uk/referencing/harvard-website-reference/
* Phrases like 'makes it faster/easier/bugfree' are not technical and will not gain marks. You need to justify 'why' a feature enhances 'what' process. e.g.
    * > The 'auto-reload' feature supports developers in reducing the cognitive/mechanical overhead of manually restarting the development server. The feedback time to experiment with code changes is reduced. This should reduce development time. Below is an example of autoreload is enabled in the developer settings file and a url to it's documentation.
    * > The framework is structured so that Components can have the html/structure/layout to be in the same file as the language/logic. This ability to have multiple languages in a single file helps reduce the cognitive overhead of developers juggling multiple files and helps reduce the footprint of code changes, making diffs more readable. Developers can more easily identify changes to specific features, this should help reduce the time it takes to identify and resolve bugs in future. Below is an example of a simple Clock component which demonstrate logic and layout in the same file using xxx framework (url of course of documentation/example).
    * > The feature of list types having built in `map`, `filter` and `reduce` methods, allows for single line of code can succinctly express multiple transformations rather than having to manually iterate over a collection multiple times with multiple intermediary collections. This reduces the code footprint (the lines of code a developer has to cognitively process) and also allows the individual transformations to be reused/shared/imported in other parts of the application that may be processing data in a similar way. This reduces duplication and leads to more consistent data processing. below is a code example of the same transforms performed with CSharp Enumerables and without.
    * > The Django Framework enforces a specific file layout for each 'Django app' that is registered. If we were creating smaller REST microservice, this separation of concerns/files layout creates a large amount of boilerplate that developers have to produce. Smaller frameworks (like expressjs) are more suitable for REST microservices as a whole service can be defined in a single file if needed. A single file is more readable/succint and deployable. The problem could come when expanding an expressjs application over time, developers need to to create/invent their own more complex file structures/separations that may not follow known established patterns (Fictitious author blog article, 2020).


Marking Rubric
--------------

From level6 guidance
https://www.canterbury.ac.uk/quality-and-standards-office/assessment-criteria.aspx

| |100-80: Excellent|79-70: Very good|69-60: Good|59-50: Sound|49-40: Satisfactory|39-20: Fail|19-0: Fail|
|--|--|--|--|--|--|--|--|
|Knowledge and application of subject and theories<br>(Are you aware of what the features of the frameworks and the languages are?)| Knowledge and understanding of theory are exceptionally detailed and beyond what has been taught. <br> Appreciation of the limits of subject-specific theories demonstrated throughout the work. <br> Approach to assessment task is clearly, appropriately, and consistently theoretically informed. | Demonstrates an extensive, sophisticated, accurate, systematic theoretical understanding of the subject and a wide range of key theories.<br> Appropriately selected theoretical knowledge is synergised into the overall assessment task with some appreciation of the limits of subject specific theories. | Shows a sophisticated systematic and accurate understanding of key subject-specific theories, which are appropriately integrated within the context of the assessment task.| Sound descriptive knowledge of key theories with appropriate application; sometimes balanced towards the descriptive rather than the critical or analytical.| Selection of theory is satisfactory, and terminology, facts and concepts are handled accurately, but application and/or understanding is generalised.| In this assignment some of the theories presented are not appropriate. Terminology, facts, and concepts are presented inaccurately and/or with omissions in key areas. The application and/or understanding demonstrated is limited.| In this assignment there is a lack of relevant subject-specific theory.|
|Conclusions<br>(Can you identify the benefit/purpose/reason-the-feature-was created)| Conclusions coherent, exceptionally well developed and show considerable originality. They form an integrated part of well-substantiated overall arguments and/or discussion, reflecting commanding grasp of a wide range of theory and/or evidence and/or literature and appropriate forms of conceptualisation. Demonstrates very sophisticated critical insight and interpretation of complex matters and ideas. | Conclusions coherent, well developed, analytical, and show sophisticated insight. They are systematic and thoroughly grounded in a wide range of theory and/or evidence and/or literature and use appropriate forms of conceptualisation, forming an integrated part of well-substantiated overall arguments and/or discussion. Demonstrates sophisticated critical insight and interpretation of complex matters and ideas. | Conclusions show development and critical insight and relate clearly and logically to substantiated arguments based on a wide range of sources of evidence and/or theory and/or literature. A range of views and information are critically evaluated and synthesised and there is thorough, perceptive interpretation of complex matters and ideas. | Logical and evidenced conclusions are drawn from evaluation of a range of sources of evidence and/or theory and/or literature. Shows the ability to consider and evaluate a range of views and to explain complex matters and ideas consistently and clearly. | Adequate conclusions are drawn which are derived from understanding of evidence and/or theory and/or literature. Shows the ability to consider alternative views and explain complex matters and ideas.|The work demonstrates limited or inaccurate understanding of the evidence and does not draw together arguments effectively.|The work either lacks a conclusion or presents an unsubstantiated and/or invalid conclusion.|
|Referencing<br>(references to feature/language documentation and any additional sources that contributed to your opinion/conclusions/understanding)| Sources used are acknowledged in the text and reference list and used perceptively to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present. | Sources used are acknowledged in the text and reference list and used fluently to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present.| Sources used are acknowledged in the text and reference list and used to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present. | Sources used are acknowledged in the text and reference list. Referencing follows a systematic approach, appropriate to the discipline. Most elements of individual references are present.| Sources of information acknowledged but integration between text and reference list is mainly effective. Attempts to follow systematic approach, appropriate to the discipline. Elements of individual references are generally complete. | Some sources of information are acknowledged here but links between text and reference list are unclear. Referencing does not follow a systematic approach. Elements of individual references are incomplete and/or absent. | Little or no acknowledgement of sources of information in text and/or reference list in this submission.|
|Communication and presentation (appropriate to discipline)<br>(Use of domain specific technical language/terminology)| Exceptional communication which demonstrates a comprehensive, sophisticated, 'and full understanding of the discipline.| Accomplished communication which demonstrates a comprehensive understanding of the discipline.| Very good and thorough communication in a format appropriate to the discipline. | Effective communication in a format appropriate to the discipline.| Clear communication and evidence of awareness of the discipline’s academic style.| Here the communication is unstructured and unfocused and/or in a format inappropriate to the discipline.| Here the communication is disorganised and/or incoherent and/or does not show understanding of the discipline’s academic style.|
