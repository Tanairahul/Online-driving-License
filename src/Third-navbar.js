import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function Thirdnavbar() {
  return (
    // starting for first div for Thirdnavbar
    <div>
      {/* this id ul tag for third navbar */}
      <ul className="third-navbar">
        <li className="lo"><Link to="/home">Home</Link></li> {/* this is for home link */}
        <li className="lo"><Link to="/about">About</Link></li>  {/* this is for about link */}
      {/* dropdown menu */}
        <li className="third-dropdown">
          <Link to="/home">Services ▼</Link> {/*dropdown menu for services*/}
          <ul className="dropdown-content">
         {/* first column in dropdown */}
            <div className="about-dropdown">
            <li className="lon"><Link to="/home"><h4 className="dropdown-h4">About registration</h4></Link></li>{/* about is top heading from registration */}
            <li className="lon"><Link to="/Change of Address">Change of Address</Link></li>
            <li className="lon"><Link to="/diplomatic">Diplomatic Vehicle</Link></li>
            <li className="lon"><Link to="/Duplicate">Duplicate RC</Link></li>
            <li className="lon"><Link to="/">Permanent Registration</Link></li>
            <li className="lon"><Link to="/display">Registration Display</Link></li>
            <li className="lon"><Link to="/Renewal Of RC">Renewal Of RC</Link></li>
            </div>
            {/* second column in dropdown */}
            <div>
            <li className="lo"><Link to="/home"><h4>Notification & Advisories</h4></Link></li> {/* notification is top heading*/ }
            <li className="lon"><Link to="/Advisory">Advisory</Link></li>
            <li className="lon"><Link to="/Draft Notification">Draft Notification</Link></li>
            </div>
            {/* third column in dropdown */}
            <div>
            <li className="lo"><Link to="/About Driving License"><h4>About Driving License</h4></Link></li>  {/*about driving license is top heading*/}
             <li className="lon"><Link to="/Adition of Class">Adition of Class</Link></li>
              <li className="lon"><Link to="/Duplication of license">Duplication of license</Link></li>
               <li className="lon"><Link to="/Learner's License">Learner's License</Link></li>
                <li className="lon"><Link to="/Permanent License">Permanent License</Link></li>
          </div>
          </ul>
        </li>
        {/* this is second dropdown-list */}
<li className="third-dropdown" >
<Link to="/Online Services">Online Services▼</Link>
<ul className="dropdown-content" id="another-third-dropdown">
  {/* second dropdown first column */}
<div className="online-dropdown">
<li className="lo"><Link to="/All India Tourist Permit"><h4>All India Tourist Permit</h4></Link></li>
<li className="lo"><Link to="/Driving license related"><h4>Driving license related</h4></Link></li>
<li className="lo"><Link to="/Services"><h4>Services</h4></Link></li>
<li className="lo"><Link to="/Nation permit"><h4>Nation permit</h4></Link></li>
<li className="lo"><Link to="/SLD Makers"><h4>SLD Makers</h4></Link></li>
<li className="lo"><Link to="/"><h4>Vehicl Fitness Testing </h4></Link></li>
</div>
{/* second dropdown second column */}
<div>
<li className="lo"><Link to="/CNG Makers"><h4>CNG Makers</h4></Link></li>
<li className="lo"><Link to="/Fancy number Booking"><h4>Fancy number Booking</h4></Link></li>
<li className="lo"><Link to="/PUCC"><h4>PUCC</h4></Link></li>
<li className="lo"><Link to="/Trade Certificate"><h4>Trade Certificate</h4></Link></li>
<li className="lo"><Link to="/Services"><h4>Vehicle Recall</h4></Link></li>
</div>
{/* also second dropdown third column */}
<div>
<li className="lo"><Link to="/Check Post Tax"><h4>Check Post Tax</h4></Link></li>
<li className="lo"><Link to="/Homologation"><h4>Homologation</h4></Link></li>
<li className="lo"><Link to="/Paid NR Services"><h4>Paid NR Services</h4></Link></li>
<li className="lo"><Link to="/VLDT Maker"><h4>VLDT Maker</h4></Link></li>
<li className="lo"><Link to="/PUCC"><h4>Vehicle Related Services</h4></Link></li>
</div>
</ul>
</li>
        {/* this is third dropdown-list */}
<li className="third-dropdown" >
<Link to="/Dashboard & Reports">Dashboard & Reports▼</Link>
<ul className="dropdown-content" id="another-third-dropdown">
  {/* third dropdown first column */}
<div className="Dashboard & Reports">
<li className="lo"><Link to="/Analytics"><h4>Analytics</h4></Link></li>
<li className="lo"><Link to="/Sarathi Reprot"><h4>Sarathi Reprot</h4></Link></li>
<li className="lo"><Link to="/Vahan"><h4>Vahan Report</h4></Link></li>
</div>
{/* third dropdown second column */}
<div>
<li className="lo"><Link to="/Homologation dashboard"><h4>Homologation dashboard</h4></Link></li>
<li className="lo"><Link to="/Sarathi4 Dashboard"><h4>Sarathi4 Dashboard</h4></Link></li>
<li className="lo"><Link to="/Vahan4 Dashboard"><h4>Vahan4 Dashboard</h4></Link></li> 
</div>
{/* also second dropdown third column */}
<div>
<li className="lo"><Link to="/PUCC Dashboard"><h4>PUCC Dashboard</h4></Link></li>
<li className="lo"><Link to="/Trade Certificate Report"><h4>Trade Certificate Report</h4></Link></li>
<li className="lo"><Link to="/Paid NR Services"><h4>eChallan Dashboard</h4></Link></li>
</div>
</ul>
</li>

        {/* this is forth dropdown-list */}
<li className="third-dropdown" >
<Link to="/External Links">External Links▼</Link>
<ul className="dropdown-content" id="another-third-dropdown">
  {/* forth dropdown first column */}
<div className="ExternalLinks">
<li className="lo"><Link to="/National Informatice Center"><h4>National Informatice Center</h4></Link></li>
<li className="lo"><Link to="/MoRth"><h4>MoRth</h4></Link></li>
<li className="lo"><Link to="/Services"><h4>Delhi TraficPolice (Notice)</h4></Link></li>
</div>
</ul>
</li>
        <li className="lo"><Link to="/sitemap">sitemap</Link></li>
        <li className="lo"><Link to="/Fcontectus">Contact us</Link></li>
         <li className="lo"><Link to="/Login">Login</Link></li>
      </ul>
    </div>
  );
}

export default Thirdnavbar;