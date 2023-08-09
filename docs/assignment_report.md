Assignment - Technical Report
=============================

Overview
--------

Create a 1600 word technical report. This will be 40% of this module.

* You will demonstrate your understanding of the frameworks and languages you have used in your _digital artefact_ assignment
* You will use technically accurate language


Intended Learning Outcomes 
--------------------------

* LO 2. Critically evaluate the effectiveness of a particular framework for an application and platform.


Submission Guidance
-------------------

* You will clone a public fork of:
    * https://github.com/calaldees/frameworks_and_languages_module
* You will be working in own public GitHub forked repository. At the datetime of the deadline a snapshot of your fork will automatically be taken. In addition, You need to formally submit a zip file with the contents of your repository to TurnItIn for a formal audit trail. You will be provided with a TurnItIn coversheet.

* It is industry practice to keep technical documentation alongside program code in the same code repository
* A markdown report template has been provided [`./technical_report.md`](https://github.com/calaldees/frameworks_and_languages_module/blob/main/technical_report.md)
* You will edit/commit `technical_report.md` markdown file in-place in your cloned fork repository. (do not rename the file)

### Converting MarkDown to PDF for TurnItIn submission

* https://hub.docker.com/r/pandoc/core
    * ```bash
        alias pandock=\
        'docker run --rm -v "$(pwd):/data" -u $(id -u):$(id -g) pandoc/core'
        ```
* https://www.tutorialsteacher.com/articles/convert-word-doc-to-markdown
    * `C:\pathToFile> pandoc myarticle.docx -o myarticle.md --extract-media=./images/`
* https://stackoverflow.com/a/53139628/3356840
    * `pandoc -f docx -t gfm somedoc.docx -o somedoc.md`


Marks Overview
--------------

* The rubric is marked from 0 to 100.
* (1600 words / 40 marks) == 40-ish words per mark. Make a clear point every 40-ish Words.
* Your writing should be short, sharp, technical and meaningful.
* Code blocks and references do not contribute to word count.


Scenario
--------

* Freecycle-Inc have an existing working prototype for their FreeCycle platform with tests. 
* The business executives can see the existing prototype 'working'. They want to continue to expand the existing solution `./example_server/` `./example_client/` into a full commercial product.
* As a "Software Engineer" You are to create a "Technical Report" for the business leadership
* Your role is to advise and justify why the business should abandon/rewrite the existing solution and use a variety of frameworks.
* You have explored/created/used a range of frameworks by creating example implementations (This is what you produced for Assignment 1)    
* Your report should
    * Explain why the current prototype `./example_server/` `./example_client/` (without frameworks) should not be used as the foundation for future enhancements.
    * Explain the features the frameworks offer (referencing technical documentation for those features)
        * Give code examples of these features from your experiments
    * Explain the features the language used by the framework offers
        * Give code examples of these features from your experiments
    * Use correct technical domain specific terminology
  
Produce a summary technical report to the business directors (1600 words total)


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
* To access the higher mark bands, the server and client should be different languages



Guidance
--------

* Every week a writing workshop will be provided in sessions.
    * We will as a group refine our writing for individual sections above.
* Level of Expectation
    * Realistically; You are not a lead developer. You are not expected to write this to a true industry standard. You are trying to demonstrate to an external examiner your knowledge and understanding of these technologies.
* Technical reports heavily used bullet points. You do not need to write in full english paragraphs all the time.
* Your justifications need to be supported with references. 
    * Show links to developer documentation, blog articles and case studies that support your technical assessment/recommendations.
    * Note: with _Academic Writing_ it is an institutional policy to use Harvard style referencing. However; this assignment is not _Academic Writing_, This assignment is _Technical Writing_. You may use urls to refer to developer documentation (the commit-timestamp to your markdown document provides a record of the access time).
* Phrases like 'makes it faster/easier/bugfree' are not technical and will not gain marks. You need to justify 'why' a feature enhances 'what' process. e.g.
    * > The 'auto-reload' feature supports developers in reducing the cognitive/mechanical overhead of manually restarting the development server. The feedback time to experiment with code changes is reduced. This should reduce development time.
    * > The framework is structured so that Components can have the html/structure/layout to be in the same file as the language/logic. This ability to have multiple languages in a single file helps reduce the cognitive overhead of developers juggling multiple files and helps reduce the footprint of code changes, making diffs more readable. Developers can more easily identify changes to specific features, this should help reduce the time it takes to identify and resolve bugs in future.
    * > The feature of list types having built in `map`, `filter` and `reduce` methods, allows for single line of code can succinctly express multiple transformations rather than having to manually iterate over a collection multiple times. This reduces the code footprint (the lines of code a developer has to cognitively process) and also allows the individual transformations to be reused/shared/imported in other parts of the application that may be processing data in a similar way. This reduces duplication and leads to more consistent data processing.


In progress
===========

* Issues to discuss
    * Rubric criteria don't match
        * Understanding of tool/feature use (with example and reference)
        * Justification/Understanding of impact/use/reason
    * Technical report - in code repository
    * References Harvard?
    * Anonymous marking? Repository submission
    * Academic Misconduct
    * Weekley progress discussion (from repo)


From level6 guidance
https://www.canterbury.ac.uk/quality-and-standards-office/assessment-criteria.aspx

| |100-80: Excellent|79-70: Very good|69-60: Good|59-50: Sound|49-40: Satisfactory|39-20: Fail|19-0: Fail|
|-|-|-|-|-|-|-|-|
|Knowledge and application of subject and theories<br>(Are you aware of what the features of the frameworks and the languages are?)| Knowledge and understanding of theory are exceptionally detailed and beyond what has been taught. <br> Appreciation of the limits of subject-specific theories demonstrated throughout the work. <br> Approach to assessment task is clearly, appropriately, and consistently theoretically informed. | Demonstrates an extensive, sophisticated, accurate, systematic theoretical understanding of the subject and a wide range of key theories.<br> Appropriately selected theoretical knowledge is synergised into the overall assessment task with some appreciation of the limits of subject specific theories. | Shows a sophisticated systematic and accurate understanding of key subject-specific theories, which are appropriately integrated within the context of the assessment task. | Sound descriptive knowledge of key theories with appropriate application; sometimes balanced towards the descriptive rather than the critical or analytical. | Selection of theory is satisfactory, and terminology, facts and concepts are handled accurately, but application and/or understanding is generalised. | In this assignment some of the theories presented are not appropriate. Terminology, facts, and concepts are presented inaccurately and/or with omissions in key areas. The application and/or understanding demonstrated is limited. | In this assignment there is a lack of relevant subject-specific theory. |
|Conclusions<br>(Can you identify the benefit/purpose/reason-the-feature-was created)| Conclusions coherent, exceptionally well developed and show considerable originality. They form an integrated part of well-substantiated overall arguments and/or discussion, reflecting commanding grasp of a wide range of theory and/or evidence and/or literature and appropriate forms of conceptualisation. Demonstrates very sophisticated critical insight and interpretation of complex matters and ideas. | Conclusions coherent, well developed, analytical, and show sophisticated insight. They are systematic and thoroughly grounded in a wide range of theory and/or evidence and/or literature and use appropriate forms of conceptualisation, forming an integrated part of well-substantiated overall arguments and/or discussion. Demonstrates sophisticated critical insight and interpretation of complex matters and ideas. | Conclusions show development and critical insight and relate clearly and logically to substantiated arguments based on a wide range of sources of evidence and/or theory and/or literature. A range of views and information are critically evaluated and synthesised and there is thorough, perceptive interpretation of complex matters and ideas.  | Logical and evidenced conclusions are drawn from evaluation of a range of sources of evidence and/or theory and/or literature. Shows the ability to consider and evaluate a range of views and to explain complex matters and ideas consistently and clearly.  | Adequate conclusions are drawn which are derived from understanding of evidence and/or theory and/or literature. Shows the ability to consider alternative views and explain complex matters and ideas.  | The work demonstrates limited or inaccurate understanding of the evidence and does not draw together arguments effectively.   | The work either lacks a conclusion or presents an unsubstantiated and/or invalid conclusion. 
|Referencing<br>(references to feature/language documentation and any additional sources that contributed to your opinion/conclusions/understanding)| Sources used are acknowledged in the text and reference list and used perceptively to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present.  | Sources used are acknowledged in the text and reference list and used fluently to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present.   | Sources used are acknowledged in the text and reference list and used to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present.  | Sources used are acknowledged in the text and reference list. Referencing follows a systematic approach, appropriate to the discipline. Most elements of individual references are present.  | Sources of information acknowledged but integration between text and reference list is mainly effective. Attempts to follow systematic approach, appropriate to the discipline. Elements of individual references are generally complete.  | Some sources of information are acknowledged here but links between text and reference list are unclear. Referencing does not follow a systematic approach. Elements of individual references are incomplete and/or absent.  | Little or no acknowledgement of sources of information in text and/or reference list in this submission. 
|Communication and presentation (appropriate to discipline)<br>(Use of domain specific technical language/terminology)| Exceptional communication which demonstrates a comprehensive, sophisticated, 'and full understanding of the discipline. | Accomplished communication which demonstrates a comprehensive understanding of the discipline. | Very good and thorough communication in a format appropriate to the discipline. | Effective communication in a format appropriate to the discipline. | Clear communication and evidence of awareness of the discipline’s academic style. | Here the communication is unstructured and unfocused and/or in a format inappropriate to the discipline. | Here the communication is disorganised and/or incoherent and/or does not show understanding of the discipline’s academic style.|

### Maybe

| |100-80: Excellent|79-70: Very good|69-60: Good|59-50: Sound|49-40: Satisfactory|39-20: Fail|19-0: Fail|
|-|-|-|-|-|-|-|-|
|Analysis| Demonstrates outstanding command of relevant analytic techniques, and the ability to apply these to new and/or abstract information and situations. Shows an exceptional appreciation of the limits and/or appropriate uses of analytic approaches. | Makes excellent use of a range of relevant analytic techniques and applies these to new and/or abstract information and situations. Shows well developed ability to compare critically alternative theories and/or analytic approaches (where relevant).  | Makes very good use of established techniques of analysis relevant to the discipline. Shows ability to compare with some insight alternative theories and/or analytic approaches (where relevant).  | Makes consistent, albeit conventional, use of established techniques of analysis, relevant to the discipline.   | Makes satisfactory but limited use of established techniques of analysis, relevant to the discipline.  | The submission includes analysis, but the analysis is ineffective and/or uninformed by key disciplinary techniques.   | This submission does not contain effective analysis and does not yet engage with key disciplinary techniques.
|Application<br>Form and content in a practical context|Demonstrates an exceptional ability to critically engage with theory and practice. Synthesises creative strategies and interrelated forms and styles more widely. Clear awareness of and ability to experiment with conventional forms. Work shows clear evidence of intellectual rigour and/or creativity. Technically and professionally competent throughout. | Demonstrates an ability to critically engage with theory and practice. Synthesises creative strategies and interrelated forms and styles. Work shows clear evidence of intellectual rigour and/or creativity. Experiments with conventional forms. Technically and professionally competent. | Evidence of critically relating theory to practice. Demonstrates well developed ability to analyse, synthesise and experiment with relationships between form and content. Good evidence of creativity. Technically and professionally competent in most respects. | Work evidences some awareness of the relationship between theory and practice. Work tends to be conventional but shows good ability to relate form and content. Some aspects of creativity present. Structure and content are relevant and approaching technical and professional competence throughout. | Work shows evidence of an appropriate relationship between form and content. Moderate degree of technical and professional competence. Some presence of creativity.  | Work shows little or no evidence of an understanding of the relationship between form and content. Lacks creativity and is technically poor. | The work has not addressed the brief in a way that shows  understanding of the relationship between form and content.|