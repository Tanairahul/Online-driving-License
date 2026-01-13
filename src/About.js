import React,{useEffect} from "react";
import './App.css'




 function About(){
   useEffect(() => {
    document.title = "My About Page"; // <-- Yaha apna title likho
  }, []);



    return(
      
<div style={{margin:"20px",marginLeft:"30px"}}> {/*this is main div in this about */}
<h1>About Us</h1>
<p>The Ministry of Road Transport & Highways (MoRTH) has been facilitating computerization of over 1300+ Road Transport Offices (RTOs) across the country. RTOs issue Registration Certificate <br />
    (R.C.) & Driving License (D.L.) that are mandatory requirements and are valid across the country, subject to certain provisions and permissions. <br /><br />

With wide variations in state policies and manual/ system based procedures being followed across the country, it had become necessary to define same standards for these documents on a <br />
 pan-India level to ensure interoperability, correctness and timely availability of information. SCOSTA committee setup for this purpose had recommended a uniform standardized software across <br /> 
  the country. The Ministry thus entrusted National Informatics Centre (N.I.C.) with the task of standardizing & deploying two softwares - VAHAN for Vehicle Registration and SARATHI for Driving <br />
  Licenses and of compiling the data with respect to Vehicle Registration and Driving Licenses of all the states in State Register and National Register.The applications VAHAN & SARATHI were <br /> 
   conceptualized to capture the functionalities as mandated by Central Motor Vehicle Act, 1988 as well as State motor vehicle Rules with customization in the core product to suit the <br />
   requirements of 36 States and UTs.</p>
  
  <h1>Our Vision</h1>
  <p>To improve the quality of service delivery to the citizen and the quality of work environment of the RTOs.</p>

  <h1>Our Mission</h1>
  <p>To automate all Vehicle Registration and Driving License related activities in transport authorities of country with introduction of smart card technology to handle issues like inter state transport <br />
     vehicle movement and to create state and national level registers of vehicles/DL information</p>

     <h1>Our Subjectives</h1>
     <p>To provide:</p>
     <li>Better services to Transport Department as well as citizen</li>
     <li>Quick implementation of government policies from time to time</li>
     <li>Improved image of Government & Department</li>
     <li>Instant access of Vehicle/DL information to other government departments</li>

     <p>The latest initiative has been to centralize both these applications for ensuring higher tranparency, security and reliability of operations through a countrywide unified database and provision of <br />
         a highly citizen and trade centric web enabled environment. The new application being developed would provide for a multi-user environment wherein the end customers (citizens) may be empowered to <br /> 
          perform most of the RTO related transactions (including payments) either from the comfort of home or from authorized third party service provider/s in their vicinity. This will also help, to a large <br />
           extent, in removing the hassles and queues faced by citizens currently (in visiting RTOs for elementary types of transactions),minimizing the extensive paperwork currently being done on the ground <br /> 
           and reducing the possibility of middlemen exploiting the uneducated / uninformed citizens. Going forward, mobile based applications would be developed and systems utilizing the Aadhar Based identification <br />
            would also be integrated with the Unified RTO database for higher security and ease of operations. <br /> <br />

With steady steps in direction of achievement of its Vision, Mission and objectives , the ministry is progressing towards provision of improved service access to citizens with quality and efficiency in service delivery, <br />
 transparency in the system and reduced workload for RTO staff.</p>
 
 <a 
  href="/Rahul_Tanwar_Advanced_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
 
  
>
  View PDF
</a>

</div>
    )
}
export default About;