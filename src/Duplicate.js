import React,{useEffect} from "react";
import './App.css'

 function Duplicate(){
   useEffect(() => {
    document.title = "Duplicate RC Page"; // <-- Yaha apna title likho
  }, []);
    return(
<>
<div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>
    <h1>Duplicate RC</h1>
    <h2>About</h2>
    <p>When a registration certificate of a vehicle is reported to be lost, mutilated, torn or used-up, duplicate registration certificate is issued to the registered owner.</p>
    <h2>Guidelines</h2>
    <li>If at any time, the certificate of registration is lost or destroyed, report to the police station in the jurisdiction of which the loss or destruction has occurred and intimate that fact in writing to the registering authority by whom the certificate of registration was issued</li>
<li>Apply for duplicate certificate of registration to the last registering authority in   <a 
  href="/FORM26.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM26
</a></li>
<li>Pay appropriate fee as specified in Rule 81 of the Central Motor Vehicle Rules 1989</li>
<h2>Documents required</h2>
<li>Application in<a 
  href="/FORM26.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM26
</a> </li>
<li>Police certificate in case of theft/loss</li>
<li>Pollution under control certificate</li>
<li>Valid insurance certificate*</li>
<li>Proof of address*</li>
<li>Challan clearance from traffic police & Enforcement wing Transport Department in commercial vehicles*</li>
<li>Tax clearance from Accounts Department in commercial vehicles*</li>
<li>Attested copy of PAN Card or<a 
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
<li>Affidavit stating that RC is lost and has not been impounded*</li>

<h2>Reference</h2>
<li>The Motor Vehicles Act 1988 (Section 41 of Chapter IV)</li>
<li>The Central Motor Vehicles Rules 1989 (Rule 53)</li>
<li>Official website of State Transport Department</li>

<p style={{color:"red"}}>Documents marked with asterisk (*) may be required in some states</p>

<a 
  href="/FORM25.pdf"
  target="_blank"
  rel="noopener noreferrer"
 
>
  FORM25
</a>
    </div>        
        </>
    )}
    export default Duplicate;