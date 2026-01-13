import React from "react";
import './App.css'
import image1 from './image-1.jpg'
import fancy from './fancy.webp'
import image2 from './image-2.jpg'
import services2 from './services2.avif'
import { Link } from "react-router-dom";

function Secondimgslide(){
return(<>
    {/* // this is main starting secondimg div */}
    <div className="main" style={{backgroundColor:"#333",margin:"20px",borderRadius:"30px"}} >
<div className="second-imgslide" style={{ display:"flex",borderRadius:"8px"}}> {/*this is second main div*/}
    <div className="second2-imgslide" style={{display:"flex",margin:"20px"}}>
<h1 style={{margin:"30px",padding:"10px", color:"white",lineHeight:"50px"}}>Vehicle Related <br /> Services</h1>
<div className="verticle"></div>
<h2 style={{color:"white",lineHeight:"50px"}}>Various services related to registration of vehicle/already registered <br />
      vehicle like Appointment Booking, Application Status, Duplicate <br />
      Registration, Change of Address, Transfer of Ownership, Hypothecation, etc.</h2>
    </div>
</div>

{/* this is images section  */}

{/* this is first img section */}

<div style={{display:"flex", textAlign:"center",paddingLeft:"20px",color:"white"}}> {/*this is main div in img section */}
<div  style={{margin:"5px"}}>
<img className="hover" src={image1} alt="image1" style={{width:"300px",height:"400px",borderRadius:"8px" }}/><Link to="/admin-login"> <h3 style={{color:"white"}}>admin login</h3> </Link>
<p>One click for all the vehicle related services</p>
</div>

{/* this is second img section */}
<div style={{margin:"5px"}}>
<img className="hover" src={fancy} alt="fancy" style={{width:"300px",height:"400px",borderRadius:"8px"}}/><h3>Fancy Number Allocation</h3>
<p>Your favorite number for your favorite vehicle</p>
</div>

{/* this is third img section */}
<div  style={{margin:"5px"}}>
<img  className="hover"src={image2} alt="image2" style={{width:"300px",height:"400px",borderRadius:"8px"}}/><h3>National Permit</h3>
<p>Seamless online way for vehicle permits</p>
</div>

{/* this is forth img section */}
<div  style={{margin:"5px"}}>
<img  className="hover"src={services2} alt="services2" style={{width:"300px",height:"400px",borderRadius:"8px"}}/><h3>Other Services
</h3>
<p>Explore the services related to your vehicle here</p>
</div>
</div>
</div>

<h1 style={{textAlign:"center",fontSize:"50px"}}>Manufacturer Related Services</h1>
<p style={{fontSize:"30px",textAlign:"center"}}>A number of applications/services devoted to vehicle/kit manufacturers for 
    <br /> ease of operations and business</p>
</>

)
}
export default Secondimgslide;