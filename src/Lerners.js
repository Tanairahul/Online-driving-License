import React, { useEffect } from "react";

import './App.css'


 function Addition(){
   useEffect(() => {
    document.title = "Lerner's License Page"; // <-- Yaha apna title likho
  }, []);
    return(<>
  <div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>

    <h1> Learner's License</h1>
   < h2> Need for a Driving Licence</h2>
   <p> No person shall drive a motor vehicle in any public place unless he holds an effective driving licence issued to him by the Licensing Authority, authorising him to drive the vehicle.</p>
  <h1> Licensing Authorities</h1>
 <li> The Joint Commissioner/ Deputy Commissioner and the Regional Transport Officers are the Licensing Authorities. The Administrative Officers and Motor Vehicle Inspectors are the Additional Licensing Authorities.</li>
  <li> Valid Learners' Licence for the category.</li>
  <h1> Age limit to obtain Driving Licence</h1>
<li> An applicant under the age of eighteen years shall be granted a learner's license to drive a motor cycle without gear except with the consent in writing of the person having the care of the person desiring a learner's license.</li>
<li> The applicant who has completed the age of eighteen years of age is eligible to apply for a driving licence to drive a motor vehicle other than a transport vehicle.</li>
<li>An applicant who has completed twenty years of age will be eligible for applying for a licence to drive a transport vehicle. </li>

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
    export default Addition;
