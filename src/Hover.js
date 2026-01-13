import React , { useState }from "react";
import "./App.css";
import Vldt from "./vltd.png";
import Cng from "./cng.jpg";
import form from './form.webp'
import services2 from './services2.avif'
import polution from './polution.jpg'

 function Hover() {
  const [currentImg, setCurrentImg] = useState(Vldt);
     return(<>
{/*// this is main div in hover*/}
<div style={{display:"flex",margin:"20px"}}>
    <div className="text" style={{display:"block",width:"500px" }}> {/*this is main testing div */}
<div     onMouseEnter={() => setCurrentImg(Vldt)} className="texting" style={{borderRadius:"30px", backgroundColor:"#333",margin:"20px",padding:"20px",cursor:"pointer"}}> {/*this div is first text line*/}
<h1 className="texting1">VLDT Maker</h1>
<p>Trake Analyze and optimize vehicle thourght location</p>
</div>

<div        onMouseEnter={() => setCurrentImg(Cng)}  className="texting" style={{borderRadius:"30px", backgroundColor:"#333",margin:"20px",padding:"20px"}}>{/* this div is second text line*/}
<h1 className="texting2">CNG Maker</h1>
<p>Make way for cleaner,greener fuel</p>
</div>

<div      onMouseEnter={() => setCurrentImg(form)} className="texting" style={{borderRadius:"30px", backgroundColor:"#333",margin:"20px",padding:"20px"}}> {/*this div is third text line*/}
<h1>SLD Maker</h1>
<p>Speed limited device Ecosystem</p>
</div>

<div      onMouseEnter={() => setCurrentImg(services2)} className="texting" style={{borderRadius:"30px", backgroundColor:"#333",margin:"20px",padding:"20px"}}> {/*this div is forth text line*/}
<h1> Homologation</h1>
<p>Complete life cycle of Vicles</p>
</div>
</div>


{/* 
this is image section in hover */}
<div style={{position:"relative"}}> {/**this first main div in img section */}
    <div   className="im1" style={{marginLeft:"60px",position:"absolute",transition:"0.5 ease"}}> {/*this is first img section*/}
<img src={currentImg} className="im" alt="vldt" style={{width:"700px",height:"600px",borderRadius:"30px"}}/>
    </div>

    
</div>
</div>
 
 {/* this is other product and survices section */}
{/* this is main div in this section */}
<div style={{background:"#333",margin:"30px", borderRadius:"30px"}}> 

<div style={{display:"flex"}}>{/* this first div section */}
<h1 style={{fontSize:"40px",color:"white",padding:"30px"}}>Other <br />
Products & <br />
Services</h1>

{/* this is image silder section */}
    <div className="main-img-heading" style={{marginLeft:"200px",borderRadius:"30px"}}> {/*this is main img heading in this images-slide */}
        <div  className="img-box"style={{width:"800px",height:"400px"}}>  {/*image box div */}
<img src={form} alt=" form" />
{/* this is arrow key div */}
<div  className="arrow">  {/*this arrow div*/}
    <div  className="second-arrow1">
    <h3 className="arrow-heading">mparivahan</h3>
<p className="arrow-paragraph">the wallet weight od document brought to half</p>
<p>Read more:</p>
</div>
</div> 
</div>
</div>{/* end this img silder */}
  </div>

 {/* this is second div section */}
 <div className="main1" style={{display:"flex"}}> {/*this is main img div*/}
 <div className="main-img-heading" > {/*this is main img heading in this */}
        <div className="img-box"style={{marginLeft:"80px"}}  >  {/*image box div */}
<img src={polution} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow">
    <h3 className="arrow-heading">Online Test/Appointment</h3>
<p className="arrow-paragraph">book/modifyOnline Test Appointment</p>
<p>Read more:</p>
</div>
</div> 
</div>
</div>


{/* this is scond img subdiv */}
        <div className="img-box"style={{marginLeft:"80px"}}  >  {/*image box div */}
<img src={services2} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow">
    <h3 className="arrow-heading">eChallan System</h3>
<p className="arrow-paragraph">A paperless trail for managing Traffic Enforcement Online.</p>
<p>Read more:</p>
</div>
</div> 
</div>

{/* this is third sub div */}
        <div className="img-box"style={{marginLeft:"80px"}} >  {/*image box div */}
<img src={Cng} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow">
    <h3 className="arrow-heading">Vahan Green Sewa</h3>
<p className="arrow-paragraph">Take the Eco-Friendly way with new automotive fuels</p>
<p>Read more:</p>
</div>
</div> 
</div>


</div>
</div>


</>
    )
}
export default Hover;