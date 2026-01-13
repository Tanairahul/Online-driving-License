import React,{useEffect} from "react";
import './App.css'

 function Renewal(){
   useEffect(() => {
    document.title = "Renewal Of RC Page"; // <-- Yaha apna title likho
  }, []);
    return(
        <>
<div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>
            <h1>Renewal of Registration Certificate</h1>
            <h2>About</h2>
            <p>Every registration certificate is required to be renewed not more than 60 days before the date of its expiry of the registration for its continuous use.</p>
        <h2>Guidelines</h2>
        <li>Apply for renewal of certificate of registration in
           
<a 
  href="/FORM25.pdf"
  target="_blank"
  rel="noopener noreferrer"
 
>
  FORM25
</a>
 to the Registering Authority in whose jurisdiction the vehicle is, not more than 60 days before the date of its expiry

        </li>
        <li>Pay the due taxes on vehicle, if any</li>
        <li>Pay appropriate fee as specified in Rule 81 of the Central Motor Vehicle Rules 1989</li>
        <h2>Documents required</h2>
        <li>Application in
            <a 
  href="/FORM25.pdf"
  target="_blank"
  rel="noopener noreferrer"
 
>
  FORM25
</a>
        </li>
        <li>Pollution under control certificate</li>
        <li>Fitness certificate*</li>
        <li>Certificate of registration*</li>
        <li>Proof for the payment of up-to-date road tax paid*</li>
        <li>Insurance certificate*</li>
<li>Copy of PAN card or
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
</a>(as applicable) *</li>
<li>Pencil Print of Chassis & Engine Number *</li>
<li>Signature Identification of owner*</li>
<h2> Reference </h2>
<li>The Motor Vehicles Act 1988 (Section 41 of Chapter IV)</li>
<li>The Central Motor Vehicles Rules 1989 (Rule 52)</li>
<li>Official website of State Transport Department</li>
<p>Documents marked with asterisk (*) may be required in some states.</p>
<a 
  href="/Rahul_Tanwar_Advanced_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"     
> View PDF
</a>
        </div>
        </>)}
        export default Renewal;