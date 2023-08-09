Academic Misconduct
===================

* https://www.canterbury.ac.uk/our-students/ug-current/academic-services/assessments/plagiarism
* https://www.canterbury.ac.uk/learning-and-teaching-enhancement/docs/Student-Academic-Integrity-Policy.pdf
* https://www.canterbury.ac.uk/quality-and-standards-office/docs/assessment-prcedures/Plagiarism-and-Academic-Misconduct-Procedures.pdf


Email Template - Academic Misconduct
--------------

Hi XXX,

Your submission for MCOMD3PFL Programming_Frameworks_and_Languages Assignment X has been selected for an Academic Misconduct Investigation.

The Programme Director appoints a representative to interview the Student (‘the interviewer’)
The interviewer is a tutor other than the tutor identifying the plagiarism.

The interviewer invites the student to a meeting. In exceptional
circumstances, the student may participate in a telephone or
video conference.
At the meeting, the allegation is to be explained to the student
and the student invited to respond.

Programme Director (or nominee) should inform the student
within seven days of receiving the information from the tutor or
meeting with the student, whichever is the later.
The interviewer should arrange the meeting with the student to
take place within seven days of the notification from the
Programme Director.
The interviewer should inform the student of the outcomes within
seven days of the meeting

The investigating officer will meet jointly with the tutor
identifying the plagiarism (or another suitable nominee of the
tutor when the tutor is unavailable) and the student.
At the meeting, the allegation is to be explained to the student
and the student invited to respond

The investigating officer will determine whether there was a case
for plagiarism and/or academic misconduct to be sustained and if
so to determine the appropriate penalties.

* A viva is a meeting where you can demonstrate knowledge and understanding about your submission.
* Your meeting can be online or face-to-face.
* A second academic will be present.
* The meeting should be no more than 30 minutes

* Please come prepared to live screen-share or bring a laptop to demo your project.
* You will be asked to run your solution and answer some questions about it's construction and use.
* Please have your development environment loaded/ready in advance of this meeting.

This meeting request is a suggested time. If you are unable to make this time we can arrange an alternative.
(Most probably Monday 31st is the next available day?)

Let us know if you would prefer this meeting online or face to face.

See you soon.

(Module Lead)


 Questions
--------------

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
