import React, { useEffect } from "react";

import './App.css'


 function Addition(){
   useEffect(() => {
    document.title = "Addition of class Page"; // <-- Yaha apna title likho
  }, []);
    return(<>
  <div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>

    <h1> Addition Of Class</h1>
   < h2> Addition to a new Class of Vehicle to a Driving Licence</h2>
   <p> A person holding a driving licence for Motor Cycle may similarly apply for addition of a light motor vehicle at any time.</p>
  <h1> Documents Required</h1>
 <li> Valid Driving Licence.</li>
  <li> Valid Learners' Licence for the category.</li>
<li> Application in 
     <a 
  href="/FORM2.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM2
</a>
</li>
<li>  <a 
  href="/FORM1.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM1
</a>(Self declaration as to the physical fitness for Non- Transport vehicles only).</li>
<li><a 
  href="/FORM2A.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM2A
</a> (Medical Certificate-for Transport Vehicles only).</li>
<li> Fees as prescribed along with user charges.</li>
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
