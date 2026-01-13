import React,{useEffect} from "react";
import './App.css'
  function ChangeAdress(){
      useEffect(() => {
        document.title = " Change Address Page"; // <-- Yaha apna title likho
      }, []);
      return(
<>
<div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>
    <h1>Change Of Address</h1>
    <h2>About</h2>
    <p>The Motor Vehicle Act 1988 gives provision to apply for recording a change of residence address of registered owner in the certificate of registration of the motor vehicle.</p>
<h2>Guidelines</h2>
<li>Apply for recording the change in residence (within 14 days of address changed) in the certificate of registration of a motor vehicle of the registered owner of the vehicle in
     <a 
  href="/FORM33.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM33
</a>
</li>

<li>Pay appropriate fee as specified in rule 81 of the Central Motor Vehicle Rules 1989</li>

<h2>Documents required</h2>
<li>Application in
      <a 
  href="/FORM33.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM33
</a>
</li>
<li>Certificate of registration</li>
<li>Proof of new address</li>
<li>Valid insurance certificate</li>
<li>Pollution under control certificate</li>
<li>No Objection Certificate from financier (in case of hypothecation)*</li>
<li>Smart card fee*</li>
<li>Attested copy of PAN card or
     <a 
  href="/FORM33.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM33
</a>
</li>
<li>Pay appropriate fee as specified in rule 81 of the Central Motor Vehicle Rules 1989</li>
<h2>Documents required</h2>
<li>Application in  <a 
  href="/FORM33.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM33
</a></li>
<li>Certificate of registration</li>
<li>Proof of new address</li>
<li>Valid insurance certificate</li>
<li>Pollution under control certificate</li>
<li>No Objection Certificate from financier (in case of hypothecation)*</li>
<li>Smart card fee*</li>
<li>Attested copy of PAN card or
  <a 
  href="/FORM60.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM60
</a> and <a 
  href="/FORM61.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM61
</a>
(as applicable) *
</li>
<li>Pencil Print of Chassis & Engine Number*</li>
<li>Signature Identification of owner*</li>
<h1>  Reference</h1>
<li>The Motor Vehicles Act 1988 (Section 49 of Chapter IV)</li>
<li>The Central Motor Vehicles Rules 1989 (Rule 59)</li>
<li>Official website of State Transport Department</li>

<p style={{color:"red"}}>Documents marked with asterisk (*) may be required in some states.</p>

<a 
  href="/Rahul_Tanwar_Advanced_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  View PDF
</a>
</div>
</>
      )
  }
  export default ChangeAdress;