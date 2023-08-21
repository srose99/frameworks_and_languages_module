Academic Misconduct
===================

University Policy
-----------------

* https://www.canterbury.ac.uk/our-students/ug-current/academic-services/assessments/plagiarism
* https://www.canterbury.ac.uk/learning-and-teaching-enhancement/docs/Student-Academic-Integrity-Policy.pdf
* https://www.canterbury.ac.uk/quality-and-standards-office/docs/assessment-prcedures/Plagiarism-and-Academic-Misconduct-Procedures.pdf

The Programme Director appoints a representative to interview the Student (‘the interviewer’)
The interviewer is a tutor other than the tutor identifying the plagiarism.

The interviewer invites the student to a meeting. In exceptional circumstances, the student may participate in a telephone or video conference.
At the meeting, the allegation is to be explained to the student and the student invited to respond.

Programme Director (or nominee) should inform the student within seven days of receiving the information from the tutor or meeting with the student, whichever is the later.
The interviewer should arrange the meeting with the student to take place within seven days of the notification from the Programme Director.
The interviewer should inform the student of the outcomes within seven days of the meeting

The investigating officer will meet jointly with the tutor identifying the plagiarism (or another suitable nominee of the tutor when the tutor is unavailable) and the student. 
At the meeting, the allegation is to be explained to the student and the student invited to respond

The investigating officer will determine whether there was a case for plagiarism and/or academic misconduct to be sustained and if so to determine the appropriate penalties.



Email Template - Invitation to discuss submission
--------------

Submission Consultation - Programming Frameworks and Languages (U14465)

Hi XXX,

Quoting the module handbook for Programming Frameworks and Languages (U14465):
> All students should be able to demo their solution, describe aspects of it’s functionality, show their workflow or engage in discussion about framework/language features.
> All students will be given the opportunity to verbally express their understanding of their submissions.
> This will be evidenced by formative assessment and engagement with sessions throughout the module delivery.
> If students have been unable to demonstrate understanding of their work incrementally in sessions, they may be asked to demo their submissions to academic staff after submission.

You have been invited to attend a meeting to verbally discuss your submission with members of academic staff.

* You need to demonstrate knowledge and understanding about your submission.
* By default, the meeting will be face-to-face. (An online meeting can be arrange upon request)
* A second academic will be present.
* The meeting should be no more than 30 minutes.

* Come prepared to demo your project.
* Have your development environment loaded/ready at the start of this meeting.
* You will be asked to run your solution and answer some questions about it's construction and use. These questions are listed in github repository.

This calendar timeslot request is a placeholder.
If you are unable to make this time we can arrange an alternative.

See you soon.

(Module Lead)


Questions
---------

* Can you describe the problem that you are trying to solve
  * What are the components of the assignment?
    * Server API (implementing `openapi.yaml` spec)
    * Client (that uses the server)
    * Client Layout (styled and responsive)
* Can you run the server and client and show the whole program flow
    * If incomplete, can you show us what you have implemented

### Server

* Can you run your sever and show us that it works (without the web client)
* Can you run the server tests
* How did you store your data
* How did you generate a new ItemID
* Tell me about the field 'date_from'. What is an ISO date?
* What is a 405, show me it's implementation, describe what this is doing
* Explain what a cors header is. Show me where you have set a CORS header. Show me how you tested this
* What was different about the response to `/`. Where did you set the content type for `/`
* Where did you setup the route for `/items/`? What was different about the data structure of this return?
* When you were developing your solution, can you describe an error you found, how did you resolve this?
* Can you make a change to your code that makes `xxx`` test fail  

### Client
* Can you run the client tests
    * Where would you look for failed test information?
    * Do they know where the output videos are?
* Show where you attached an action to a button. What was the action? what code was executed? Talk us through the information flow.
* How did you get the server host address from the query string `?api=`
* How do you render html with templated variables - show me the features of the framework that allowed you to do this
* How did you make your html elements discoverable to the automated tests?

### Client Layout
* Can you show my how you styled your buttons and inputs
* Can you resize your client display width
  * Can you talk about how you achieved this


Solutions
---------

* Server (python/falcon)
  * https://github.com/calaldees/TeachProgramming/blob/master/teachprogramming/static/projects/web/rest_api/falcon_api.py
* Client (vue.js)
  * https://github.com/calaldees/TeachProgramming/blob/master/teachprogramming/static/projects/web/frameworks/vue.html
* Exemplars
  * https://github.com/calaldees/RESTApiTask
    * https://github.com/calaldees/RESTApiTask/blob/main/app/server.js
    * https://github.com/calaldees/RESTApiTask/blob/main/app/client.html
