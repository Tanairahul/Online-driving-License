import React, { useState } from "react";
import "./App.css";
import driving from "./driving schhol.jpg";
import image1 from "./image-1.jpg";
import phone from "./phone.jpg";
import Faq from "./faq.jpg";

function SecondHover() {
  const [currentImg, setCurrentImg] = useState(image1);

    return(
        <>

    
<div style={{textAlign:"center"}}>{/*this is text area */}
<h1 style={{fontSize:"50px"}}>Informational Services</h1>
<p style={{fontSize:"30px"}}> Easy access to all the necessary information for various transport services</p>
</div>

 <div style={{display:"flex",margin:"30px"}}> {/*this is main second hover div */}
{/* this is text coloumn */}
    <div className="text" style={{display:"block",width:"500px" }}> {/*this is main testing div */}
<div     onMouseEnter={() => setCurrentImg(image1)} className="texting" style={{borderRadius:"30px", backgroundColor:"#333",margin:"20px",padding:"20px",cursor:"pointer"}}> {/*this div is first text line*/}
<h1 className="texting1">License & Registration Details</h1>
<p>Identify basic details with License and Registration Details</p>
</div>


<div        onMouseEnter={() => setCurrentImg(driving)}  className="texting" style={{borderRadius:"30px", backgroundColor:"#333",margin:"20px",padding:"20px"}}>{/* this div is second text line*/}
<h1 className="texting2">Citizen Guide </h1>
<p>A guide to acquaint you to the most frequently used services</p>
</div>

<div        onMouseEnter={() => setCurrentImg(phone)}  className="texting" style={{borderRadius:"30px", backgroundColor:"#333",margin:"20px",padding:"20px"}}>{/* this div is second text line*/}
<h1 className="texting2">Notification & Advisories</h1>
<p>Latest update from MoRTH and other related Gov.authorites</p>
</div>

<div        onMouseEnter={() => setCurrentImg(Faq)}  className="texting" style={{borderRadius:"30px", backgroundColor:"#333",margin:"20px",padding:"20px"}}>{/* this div is second text line*/}
<h1 className="texting2">Frequently Asked Questions</h1>
<p>Find answer to the most comman and frequent questions here</p>
</div>
</div>

{/* 
this is image section in hover */}
<div style={{position:"relative"}}> {/**this first main div in img section */}
    <div   className="im1" style={{marginLeft:"60px",position:"absolute",transition:"0.5 ease"}}> {/*this is first img section*/}
<img src={currentImg} className="im" alt="vldt" style={{width:"900px",height:"800px",borderRadius:"30px"}}/>
    </div>

    
</div>

</div>
</>

    )
}
export default SecondHover;
