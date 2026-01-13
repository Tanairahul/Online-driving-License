import React, { useEffect } from "react";

import './App.css'


 function Duplinces(){
   useEffect(() => {
    document.title = "Duplicate License Page"; // <-- Yaha apna title likho
  }, []);
    return(<>
    
  <div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>

    <h1> Duplicate Licence</h1>
   < h2> A duplicate driving licence will be issued in the following circumstances</h2>
   <li> When the licence is lost or destroyed</li>
   <li> When the licence is defaced or torn or completely written up</li>
   <li> When the photograph affixed to the licence requires replacement</li>
  <h1> Requirements</h1>
 
<li> Application in 
     <a 
  href="/FORM2.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM2
</a>
</li>
   <li> Original licence written or defaced if available.</li>
   <li> Attested photocopies of DL if available in case of loss of licence.</li>
   <li> Fees as prescribed along with user charges</li>

<a 
  href="/Rahul_Tanwar_Advanced_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View PDF
</a>
 
  </div>
    

    </>)}
    export default Duplinces;