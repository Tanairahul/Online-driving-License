
import React from "react";
import  './App.css';
import flag from './flag.jpg';
function Secondnav() {

return (

<nav className="second-navbar">  
<div className="dusra-navbar">
<ul className="second-navbar-list">  
<img src={flag} alt="Flag" className="second-navbar-image" />
</ul>
<div className="text-container">
<h5>PARIVAHAN <br />SEWA</h5>
<div className="v-line"></div>
<ul className="translation-text">
<li> सड़क परिवहन और राजमार्ग मंत्रालय</li>
<li> Ministry of Road Transport & Highways</li>
</ul>
</div>
</div>
</nav>
);
}

export default Secondnav;
