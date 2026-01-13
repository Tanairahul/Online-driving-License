import React from "react";
import './App.css'

function Footer(){
    return(<>
    <div  style={{backgroundColor:"gray",margin:"30px",borderRadius:"30px",paddingLeft:"20px"}}>
<div style={{display:"flex"}}> {/*this is main div in footer */}

<div style={{display:"block",padding:"20px"}}>{/*this is second footer column */}
<h2 style={{color:"blue"}}>Terms and Policies</h2>
<p>Privacy Policy</p>
<p>Hyperlink Policy</p>
<p>Website Policy</p>
<p>Content Policies</p>
<p>Contingency Plan</p>
<p>Data sharing Policy</p>
</div>


<div style={{display:"block",padding:"20px"}}>{/*this is second footer column */}
<h2 style={{color:"blue"}}>About Us</h2>
<p>Sitemap</p>
<p>Terms of Use</p>
<p>MoRTH</p>
<p>CMVR 1989 </p>
<p>CMVR 1989 Ebook</p>
</div>

<div style={{display:"block",padding:"20px"}}>{/*this is second footer column */}
<h2 style={{color:"blue"}}>Resources</h2>
<p>Fees and User Charges</p>
<p>Act,Rules and Policies</p>
<p>Permit Fees and Period </p>
<p>Manual</p>
<p>Homologation</p>

</div>

<div style={{display:"block",padding:"20px"}}>{/*this is second footer column */}
<h2 style={{color:"blue"}}>Need Help</h2>
<p>Contact Us</p>
<p>frequently Asked Questions</p>
<p>Web Information Manager</p>
<p>Calender</p>
</div>

</div>
<div style={{display:"flex",paddingLeft:"500px",paddingBottom:"50px"}}>
<p>Totl Visitors:</p>
<p style={{marginLeft:"200px"}}>last Update on :18-11-2025</p>
</div>
</div>
</>
    )
}
export default Footer;