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

| Assignment | Section | Marks (Total 40) |
|---|--------------------------------|---:|
| 2 | Server framework features *3   |  9 |
| 2 | Server language features *2    |  6 |
| 2 | Client framework features *3   |  9 |
| 2 | Client language features *2    |  6 |
| 2 | Critique of framework-less prototype |  4 |
| 2 | Future Technology Recommendations    |  6 |
|   |                                | 40 |

1 mark = 1% of module

(1600 words / 40 marks) == 40-ish words per mark. Make a clear point every 40-ish Words.
Your writing should be short, sharp, technical and meaningful.


Scenario
--------

* You have been employed by FreeCycle-Inc as a Lead Engineer
* Your role is to advise and justify the technologies you have chosen to use for your implementation (from assignment 1)
* Freecycle-Inc have an existing working prototype for their FreeCycle platform with tests.
* You will need to 
  * Justify the use of your proposed technologies
  * Critique the current prototype
  * Advise on possible future technologies with rational/reasons
  
Produce a summary technical report to the business directors (1600 words total)


Report Contents
---------------

### Introduction

* A summary of what this report contains and why it might be useful to business directors and your engineering team (no direct marks, but without this your write-up has no identifiable purpose)


### Framework Features (18 Marks)

Describe the features of the frameworks and explain the problem that they are solving.

* Headings
    * 3 * Server framework features (3 * 3 marks per feature = 9 marks)
    * 3 * Client framework features (3 * 3 marks per feature = 9 marks)
* Each feature should contain (3 marks per feature)
    1. Technical description of the feature (40ish words - 1 mark)
        * No technical terminology == no mark
        * poor spelling, grammar and sentence structure == no mark
    2. A code block snippet example demonstrating the feature (1 mark)
        * If you can additionally permalink to a snippet in your own code that would be additional supporting evidence
    3. Explain the problem-this-is-solving/why/benefits/problems (40ish words - 1 mark)
        * No technical terminology == no mark
        * poor spelling, grammar and sentence structure == no mark
    4. Provide reference urls to your sources of information about the feature
        * references do not count towards word count
        * No reference == No mark for this entire feature

### Language Features (12 Marks)

Describe the features of the language and explain the problem that they are solving.

* Headings
    * 2 * Server language features (2 * 3 marks per feature = 6 marks)
    * 2 * Client language features (2 * 3 marks per feature = 6 marks)
        * You can only claim marks for 3 features per language. The server and client languages should be different to claim full marks for this section
* (see feature marks above)

### Critique of framework-less prototype (4 marks)

* A technical critique of why one aspect of the the existing prototype implementation is not fit for business use
    * `./example_server/` Server prototype critique *1 (2 marks)
    * `./example_client/` Client prototype critique *1 (2 marks)
* Each prototype critique should contain (2 marks per critique)
    * A code snippet example demonstrating the feature (1 mark)
    * Explain why this pattern is problematic (40ish words - 1 mark)
        * No technical terminology == no mark
        * poor spelling, grammar and sentence structure == no mark

### Future Technology Recommendations (6 Marks)

Future Technology Suggestions: Consider a 2 year technical expansion/deployment for freecycle-inc

* Suggest *3 features of other frameworks or tools/technologies that might be useful in expanding the freecycle product
    * Description of a feature or tool (40ish words - 1 mark)
        * No technical terminology == no mark
        * poor spelling, grammar and sentence structure == no mark
    * Why/benefits/problems with using this (40ish words - 1 mark)
        * No technical terminology == no mark
        * poor spelling, grammar and sentence structure == no mark
    * Provide reference urls - to your source of information about this technology
        * references do not count towards word count
        * No reference == No mark for this entire feature


Guidance
--------

* Every week a writing workshop will be provided in sessions.
    * We will as a group refine our writing for individual sections above.
* Level of Expectation
    * Realistically; You are not a lead developer. You are not expected to write this to a true industry standard. You are trying to demonstrate to an external examiner your knowledge and understanding of these technologies.
* Technical reports heavily used bullet points. You do not need to write in full english paragraphs all the time.
* Your justifications need to be supported with references. 
    * Show links to developer documentation, blog articles and case studies that support your technical assessment/recommendations.
    * Note: with _Academic Writing_ it is an institutional policy to use Harvard style referencing. However; this assignment is not _Academic Writing_, This assignment is _Technical Writing_. You may use urls to refer to developer documentation with the commit-timestamp to your markdown document serving as a record of the access time.


In progress
===========

From level6 guidance
https://www.canterbury.ac.uk/quality-and-standards-office/assessment-criteria.aspx

| |100-80: Excellent|79-70: Very good|69-60: Good|59-50: Sound|49-40: Satisfactory|39-20: Fail|19-0: Fail|
|-|-|-|-|-|-|-|-|
|Knowledge and application of subject and theories" | Knowledge and understanding of theory are exceptionally detailed and beyond what has been taught. Appreciation of the limits of subject-specific theories demonstrated throughout the work. Approach to assessment task is clearly, appropriately, and consistently theoretically informed. | Demonstrates an extensive, sophisticated, accurate, systematic theoretical understanding of the subject and a wide range of key theories. Appropriately selected theoretical knowledge is synergised into the overall assessment task with some appreciation of the limits of subject specific theories. | Shows a sophisticated systematic and accurate understanding of key subject-specific theories, which are appropriately integrated within the context of the assessment task. | Sound descriptive knowledge of key theories with appropriate application; sometimes balanced towards the descriptive rather than the critical or analytical. | Selection of theory is satisfactory, and terminology, facts and concepts are handled accurately, but application and/or understanding is generalised. | In this assignment some of the theories presented are not appropriate. Terminology, facts, and concepts are presented inaccurately and/or with omissions in key areas. The application and/or understanding demonstrated is limited. | In this assignment there is a lack of relevant subject-specific theory. |
|Analysis| Demonstrates outstanding command of relevant analytic techniques, and the ability to apply these to new and/or abstract information and situations. Shows an exceptional appreciation of the limits and/or appropriate uses of analytic approaches.   | Makes excellent use of a range of relevant analytic techniques and applies these to new and/or abstract information and situations. Shows well developed ability to compare critically alternative theories and/or analytic approaches (where relevant).  | Makes very good use of established techniques of analysis relevant to the discipline. Shows ability to compare with some insight alternative theories and/or analytic approaches (where relevant).  | Makes consistent, albeit conventional, use of established techniques of analysis, relevant to the discipline.   | Makes satisfactory but limited use of established techniques of analysis, relevant to the discipline.  | The submission includes analysis, but the analysis is ineffective and/or uninformed by key disciplinary techniques.   | This submission does not contain effective analysis and does not yet engage with key disciplinary techniques. 
|Conclusions| Conclusions coherent, exceptionally well developed and show considerable originality. They form an integrated part of well-substantiated overall arguments and/or discussion, reflecting commanding grasp of a wide range of theory and/or evidence and/or literature and appropriate forms of conceptualisation. Demonstrates very sophisticated critical insight and interpretation of complex matters and ideas. | Conclusions coherent, well developed, analytical, and show sophisticated insight. They are systematic and thoroughly grounded in a wide range of theory and/or evidence and/or literature and use appropriate forms of conceptualisation, forming an integrated part of well-substantiated overall arguments and/or discussion. Demonstrates sophisticated critical insight and interpretation of complex matters and ideas. | Conclusions show development and critical insight and relate clearly and logically to substantiated arguments based on a wide range of sources of evidence and/or theory and/or literature. A range of views and information are critically evaluated and synthesised and there is thorough, perceptive interpretation of complex matters and ideas.  | Logical and evidenced conclusions are drawn from evaluation of a range of sources of evidence and/or theory and/or literature. Shows the ability to consider and evaluate a range of views and to explain complex matters and ideas consistently and clearly.  | Adequate conclusions are drawn which are derived from understanding of evidence and/or theory and/or literature. Shows the ability to consider alternative views and explain complex matters and ideas.  | The work demonstrates limited or inaccurate understanding of the evidence and does not draw together arguments effectively.   | The work either lacks a conclusion or presents an unsubstantiated and/or invalid conclusion. 
|Referencing| Sources used are acknowledged in the text and reference list and used perceptively to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present.  | Sources used are acknowledged in the text and reference list and used fluently to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present.   | Sources used are acknowledged in the text and reference list and used to support discussion. Referencing follows a systematic approach, appropriate to the discipline. All elements of individual references are present.  | Sources used are acknowledged in the text and reference list. Referencing follows a systematic approach, appropriate to the discipline. Most elements of individual references are present.  | Sources of information acknowledged but integration between text and reference list is mainly effective. Attempts to follow systematic approach, appropriate to the discipline. Elements of individual references are generally complete.  | Some sources of information are acknowledged here but links between text and reference list are unclear. Referencing does not follow a systematic approach. Elements of individual references are incomplete and/or absent.  | Little or no acknowledgement of sources of information in text and/or reference list in this submission. 
