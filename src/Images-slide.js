import React from "react";
import { Link } from "react-router-dom";
import './App.css'
import form from './form.webp';
import learner from './learner.jpg';
import school from './driving schhol.jpg'
import services from './services.jpg'


function Imageslide(){
    return(
        <>
        <div className="main-img-heading"> {/*this is main img heading in this images-slide */}
        <div className="img-box">  {/*image box div */}
<img  src={form} alt=" form" />
{/* this is arrow key div */}
<div className="arrow">  {/*this arrow div*/}
    <div className="second-arrow">
    <h3 className="arrow-heading"><Link to="/online"> Online Test/Appointment</Link></h3>
<p className="arrow-paragraph">book/modifyOnline Test Appointment</p>
<p>Read more:</p>

</div>
</div> 
</div>
<div className="second-img">
<img src={learner} alt=" learner" />
{/* this is second img arrow key div */}
<div className="second1-arrow">  {/*this arrow div*/}
    <div className="second2-arrow">
    <h3 className="arrow-heading"><Link to="/Lerner">Driver/learner License 
    </Link></h3>
<p className="arrow-paragraph">License register on your fingertips</p>
<p>Read more:</p>
</div>
</div> 
</div>

{/* this is third imag arrow */}
<div className="third-img">
<img src={school} alt=" learner" />
{/* this is third img arrow key div */}
<div className="third2-arrow">  {/*this arrow div*/}
    <div className="third3-arrow">
    <h3 className="arrow-heading"><Link to="/Drivingschool">Driving School </Link></h3>
<p className="arrow-paragraph">One Place for application of driving school License</p>
<p>Read more:</p>
</div>
</div> 
</div>

{/* this is forth imag arrow */}
<div className="third-img">
<img src={services} alt=" learner" />
{/* this is forth img arrow key div */}
<div className="third2-arrow">  {/*this arrow div*/}
    <div className="third3-arrow">
    <h3 className="arrow-heading"><Link to="/other">Other Services </Link></h3>
<p className="arrow-paragraph">Explore the plethora of Services related to driving License</p>
<p>Read more:</p>
</div>
</div> 
</div>
</div>
</>
    )
}
export default Imageslide; 