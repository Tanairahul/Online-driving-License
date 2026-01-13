import React from "react";
import { Link } from "react-router-dom";
import './App.css';
import india from './india permit.jpg'
function Secondapp(){
      const states = ["Rajasthan", "Delhi", "UP", "MP"];
    return(
  
<div>{/*this is first div section in second div */}

<div style={{margin:"5px",border:"2px solid black",padding:"5px" ,display:"flex",height:"100px"}}>{/*this is second nav bar */}

<img src={india} alt="india" style={{height:"75px",width:"90px",borderRadius:"50px",}} />

{/* this is vertical line  */}

<div className="v-line" style={{padding:"1px"}}></div>

{/* this is text area  */}
<div style={{display:"block"}}>
<h1> Ministry of Road Transport & Highways</h1>
<h3> Government of India</h3>
</div>

</div>

<div style={{border:"2px solid black",display:"flex", borderRadius:"8px",padding:"5px"}}>
<Link to="/home"   style={{padding:"10px"}}> Parivahan </Link> 
<Link to="/Contect"   style={{padding:"10px"}}> Contect Us </Link> 
 </div>

   <select style={{marginTop:"50px",marginLeft:"550px",paddingLeft:"150px",paddingRight:"150px",border:"2px solid black"}}>
      <option>Select State</option>
      {states.map((state, index) => (
        <option key={index}>{state}</option>
      ))}
    </select>
</div>

    )
}
export default Secondapp;