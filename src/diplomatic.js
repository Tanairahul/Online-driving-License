import React,{useEffect} from "react";
import './App.css'


 function Diplomatic(){
   useEffect(() => {
    document.title = " Diplomatic Page"; // <-- Yaha apna title likho
  }, []);
  return(
<>
<div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>
    <h1 style={{fontSize:"40px"}}>Diplomatic Vehicles</h1>
    <h1>About</h1>
    <p>A "diplomatic officer" or "consular officer", as recognized by the Central Government, shall have special provision for registration
         of motor vehicles where the registering authority shall register the vehicle in such manner and shall assign to the vehicle for display
          thereon a special registration mark in accordance with the provisions contained in those rules and shall issue a certificate of registrationthat 
          the vehicle has been registered under this section; and any vehicle so registered under this section. If any vehicle registered under this section
           ceases to be the property of any diplomatic officer or consular officer, the certificate of registration issued under this section shall also cease to be effective.</p>

           <h1>Guidelines</h1>
           <p><li>Every application for registration of a motor vehicle under on behalf of any diplomatic officer or consular officer shall be made in triplicate by the head of the mission or consular officer in Form 42 and be addressed to the registering authority through the Competent Authority</li></p>
<p><li>Pay appropriate fee and tax as specified in rule 81 of the Central Motor Vehicle Rules 1989</li></p>

<h1>Documents required</h1>  
{/* this is first pdf */}
<p><li>Application in a  <a 
  href="/FORM1.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM1
</a> </li></p>

{/* this is second pdf text */}
<p><li>Road worthiness certificate in
    <a 
  href="/FORM2.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM-22
</a> 
from the manufacturers (
 <a 
  href="/FORM2A.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM-22A
</a> 
 from the Body builder)

    </li></p>

    <p><li>Pollution under control certificate</li></p>
    <p><li>Valid insurance certificate</li></p>
    <p><li>Proof of address</li></p>
    <p><li>Design approval copy of STA in case Trailer or Semi-Trailer</li></p>
    <p><li>Original sales certificate from the concerned authorities in 
         <a 
  href="/FORM21.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  FORM-21
</a> 
     in the case of ex-army vehicle   </li></p>
     <p><li>Custom's clearance certificate along with licence, and bond in case of imported vehicle</li></p>
     <p><li>Temporary registration, if any</li></p>

     <h1>Reference</h1>
     <p><li>The Motor Vehicles Act 1988 (Section 42 of Chapter IV)</li></p>
     <p><li>The Central Motor Vehicles Rules 1989 (Rule 76)</li></p>
     <p><li>Official website of State Transport Department</li></p>
<p style={{color:"red"}}>Documents marked with asterisk (*) may be required in some states.</p>

    <a 
  href="/FORM21.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  view PDF
</a> 
</div>
</>
 )}
  export default Diplomatic;

