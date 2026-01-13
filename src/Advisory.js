import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './App.css'


 function Duplicate(){
   useEffect(() => {
    document.title = "Advisory Page"; // <-- Yaha apna title likho
  }, []);
    return(
<>
<div style={{margin:"30px",marginLeft:"25px"}}> {/*this is main is used owerflow */}
<h1>Notification And Advisories</h1> {/* this first is heading */ }
<div style={{display:"flex",height:"500px",width:"2000px",fontSize:"12px"}}>{/* this div is for flex box */ }
<div style={{border:"1px solid white",width:"150px"}}>

<div style={{backgroundColor:"blue",padding:"10px",display:"block"}}>Notification Date</div>  
<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> 1 July, 2025</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>16 April, 2018</div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> 8 August, 2018</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>29 August, 2018</div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> 1 October, 2018</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>10 October, 2018</div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> 15 October, 2018</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>8 November, 2018</div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}>19 November, 2019</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>21 November, 2018</div>

</div>
{/* this is second div for description */}

<div style={{border:"1px solid white",width:"150px",flexDirection:"column" }}>

<div style={{backgroundColor:"blue",padding:"10px",display:"block"}}>Notification No.</div>
<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> RT16011/9/2019-T</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>NA</div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> NA</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>NA</div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> NA</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>NA</div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> NA</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>NA</div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> NA</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>NA</div>

</div>

{/* this is third div for description */}

<div style={{border:"1px solid white"}}>

<div style={{backgroundColor:"blue",padding:"10px",display:"block"}}>Subject</div>
<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> 	Motor Vehcile Aggregator Guidlines ,2025</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>Advisory - in the matter of issue of driving licence for light motor vehicles</div>    

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> 		Acceptance of Driving Licence, Registration Certificate or other documents presented through DigiLocker or mParivahan</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>	Advisory regarding Third party insurance of car and two wheelers.</div>    

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> 	Compliance of Honorable Supreme Court's directions regarding linking of PUC data (Emission related data) with the VAHAN database.	</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>Integration of the Retro fitted Speed limiting device (SLD) / Speed Governor data on Transport Vehicles with Vahan Database.	</div>    


<div style={{backgroundColor:"white",padding:"10px",display:"block"}}>Updating of the correct 3rd Party Insurance Details on VAHAN database at the time of initial registration of new vehicles.	</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>	Clarification regarding notification no G.S.R. 683(E) dated 13.04.2018.</div>    

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}>Production of transport related documents in an electronic form-reg.</div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}>	Compliance of Hon'ble Supreme Court's directions regarding linking of PUC data (emission related data) with the VAHAN database.</div>    
</div>
{/* 
this is fourth div for description */}
<div style={{border:"1px solid white"}}>
<div style={{backgroundColor:"blue",padding:"10px",display:"block"}}>View</div>
<div style={{backgroundColor:"white",padding:"10px",display:"block"}}><Link to="/pdf1.pdf">MV-Aggregators-Guidelines-2025 - English and Hindi.pdf  </Link> </div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><Link to="/pdf1.pdf">16 April 2018.pdf </Link></div>


<div style={{backgroundColor:"white",padding:"10px",display:"block"}}><Link to="/pdf1.pdf">08-08-2018.pdf </Link> </div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><Link to="/pdf1.pdf">29-Aug-2018.pdf  </Link></div>


<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> <Link to="/pdf1.pdf"> 01 oct 2018.pdf</Link></div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><Link to="/pdf1.pdf"> 10-10-2018.pdf </Link></div>


<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> <Link to="/pdf1.pdf"> 15-10-2018.pdf</Link></div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><Link to="/pdf1.pdf"> 08-11-2018.pdf </Link></div>


<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> <Link to="/pdf1.pdf">19th Nov 2018.pdf </Link></div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><Link to="/pdf1.pdf">21th Nov 2018.pdf  </Link></div>

</div>

{/* this is fifth div for description */}

<div style={{border:"1px solid white",fontSize:"4.8px"}}>
<div style={{backgroundColor:"blue",padding:"10px",display:"block"}}>File-size/Type</div>
<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> <p>729KB/pdf </p></div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><p> 	1051KB/pdf</p></div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> <p> 	786KB/pdf</p></div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><p>	541KB/pdf </p></div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> <p>	749KB/pdf </p></div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><p> 	2188KB/pdf</p></div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> <p> 	433KB/pdf</p></div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><p> 	209KB/pdf</p></div>

<div style={{backgroundColor:"white",padding:"10px",display:"block"}}> <p>	418KB/pdf </p></div>
<div style={{backgroundColor:"#333",color:"white",padding:"10px",display:"block"}}><p>	764KB/pdf </p></div>

</div>

</div>
</div>

</>)}
export default Duplicate;