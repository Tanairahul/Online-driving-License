import React from "react";
import './App.css'
import Phone from './phone.jpg'
 
function Media(){
    return(
<div style={{backgroundColor:"#333",margin:"30px",borderRadius:"30px"}}>{/*this is main div thrise of any div */}
<div style={{display:"flex",color:"white"}}>{/*this is headind and line div */}
<h1 style={{fontSize:"50px" ,padding:"20px"}}>Public Media</h1>
<div className="verticle"style={{margin:"20px"}} ></div>
<p style={{fontSize:"30px",padding:"20px" }}> Showcasing our achievements and progress through Content, <br /> Media developed internally/externally</p>
</div>

{/* this is start for navbar hover trick */}
<div style={{display:"flex",color:"white",margin:"30px",paddingBottom:"30px"}}>{/*this is bar contant */}

    <div style={{borderRadius:"8px",border:"2px solid black",padding:"20px",backgroundColor:"blue",marginLeft:"20px"}}>Parivahan Newslatter</div>
    <div className="bar" style={{borderRadius:"8px",border:"2px solid black",padding:"20px",marginLeft:"20px"}}>Next Mile</div>
    <div className="bar" style={{borderRadius:"8px",border:"2px solid black",padding:"20px",marginLeft:"20px"}}>Circulars</div>
    <div className="bar" style={{borderRadius:"8px",border:"2px solid black",padding:"20px",marginLeft:"20px"}}>Press coverage2021 </div>
    <div className="bar" style={{borderRadius:"8px",border:"2px solid black",padding:"20px",marginLeft:"20px"}}>Press coverage2020</div>
    <div className="bar" style={{borderRadius:"8px",border:"2px solid black",padding:"20px",marginLeft:"20px"}}>Press coverage2019</div>
    <div className="bar" style={{borderRadius:"8px",border:"2px solid black",padding:"20px",marginLeft:"20px"}}>Press coverage2018</div>
    <div className="bar" style={{borderRadius:"8px",border:"2px solid black",padding:"20px",marginLeft:"20px"}}>videos</div>
    
</div>
 
{/* this is img section start */}
<div>{/*this main img div */}
  <div className="img-box" style={{width:"1300px",margin:"60px",paddingBottom:"50px",borderRadius:"30px"}} >  {/*image box div */}
<img src={Phone} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow" style={{width:"1300px"}}>
    <h3 className="arrow-heading">Homologation Dashboard</h3>
<p className="arrow-paragraph">Displaying number of vehicle records nationally.</p>
<p>Read more:</p>
</div>
</div> 
</div>
</div>

</div>
    )
}
export default Media;