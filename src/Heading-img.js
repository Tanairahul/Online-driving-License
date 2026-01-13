import React from "react";
import './App.css'
import Dashboard from './dashboard.jpg'
import sarathi from './sarathi.png'

function headimg(){
    return(
        <div  style={{marginTop:"90px"}}>   {/*this is both of img and heading*/}
            <div style={{textAlign:"center"}}> {/*this is heading section */}
<h1 style={{fontSize:"50px"}}>Dashboard and Reports</h1>
<p style={{fontSize:"30px"}}>State of the Art Dashboard services for depiction of the progress and data specific to <br />
 a state and across the country.</p>
</div>

{/* this start is img section */}
<div style={{display:"flex"}}> {/*this is now start img div*/}

      <div className="img-box" >  {/*image box div */}
<img src={Dashboard} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow">
    <h3 className="arrow-heading">Vahan Dashboard</h3>
<p className="arrow-paragraph">National visiblity of vehicle registration and related Services.</p>
<p>Read more:</p>
</div>
</div> 
</div>

{/* this is second img  */}
      <div className="img-box" >  {/*image box div */}
<img src={sarathi} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow">
    <h3 className="arrow-heading">Sarathi Dashboard</h3>
<p className="arrow-paragraph">License registration on your fingertips.</p>
<p>Read more:</p>
</div>
</div> 
</div>

{/* this is third img */}
   <div className="img-box" >  {/*image box div */}
<img src={sarathi} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow">
    <h3 className="arrow-heading">VLTD Dashboard</h3>
<p className="arrow-paragraph">VLTS ecosystem of vehicles for National Tracking.</p>
<p>Read more:</p>
</div>
</div> 
</div>

{/* this is forth img */}
   <div className="img-box" >  {/*image box div */}
<img src={Dashboard} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow">
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
export default headimg;