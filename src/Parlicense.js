import React, { useEffect } from "react";

import './App.css'


 function Perlicense(){
   useEffect(() => {
    document.title = "Duplicate License Page"; // <-- Yaha apna title likho
  }, []);
    return(<>
      <div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>
<h1> Permanent License</h1>
<p> The Facility of online slot booking for test of completence of driving licence has been provided. Please visit the website for scheduling an appointment.</p>
<h1> PROCEDURE:</h1>
<li> Schedule an appointment for the test of competence online by visiting the website or any RTO office where such facility exists. In other cases schedule an appointment directly at the Office Concerned.</li>
<li>An application in Form 4, for a permanent driving licence shall be made along with the Learners' Licence obtained for such class of vehicle </li>
<li> The test of competence will be conducted by the competent authority.</li>
<li>The applicant who has held a valid Learners' Licence, for a period of at least 30 days, shall be competent to appear for the test of competence. </li>
<li> The applicant should bring a vehicle of the type to which the application relates</li>
<li> Fees as prescribed along with user charges</li>
      <a 
  href="/Rahul_Tanwar_Advanced_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View PDF
</a>
 

      </div>
    </>
    )}
    export default Perlicense;
