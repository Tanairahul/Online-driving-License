import React,{useEffect} from "react";
import './App.css'

 function Display(){
   useEffect(() => {
    document.title = "Ragistration Display Page"; // <-- Yaha apna title likho
  }, []);
    return(
        <>
<div style={{margin:"30px",marginLeft:"30px",overflowWrap:"break-word"}}>

<h1>Registration Display</h1>
<h2>About</h2>
<p>As given on the parivahan website*</p>
<h2>Reference</h2>
<li>The Motor Vehicles Act 1988 (Section 41 of Chapter IV)</li>
<li>The Central Motor Vehicles Rules 1989 (Rule 50, 51)</li>
<li>State transport official websites</li>
<p style={{color:"red"}}>Documents marked with asterisk (*) may be required in some states.</p>

<a 
  href="/Rahul_Tanwar_Advanced_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
 
>
  View PDF
</a>
</div>

</>)}
export default Display;