import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

function Register(){
  const [f,setF]=useState({name:"",email:"",phone:"",password:""});
  return <div>
    <h2>Register</h2>
    {["name","email","phone","password"].map(k=>
      <input key={k} placeholder={k} value={f[k]} onChange={e=>setF({...f,[k]:e.target.value})}/>
    )}
    <button onClick={async()=>{await axios.post("/api/register",f);alert("Registered")}}>Submit</button>
  </div>;
}

function AdminPanel({token}){
  const [apps,setApps]=useState([]);
  useEffect(()=>{axios.get("/api/admin/apps",{params:{token}}).then(r=>setApps(r.data))},[token]);
  return <div>
    <h2>Admin Panel</h2>
    {apps.map(a=><div key={a._id}>
      {a.userId} - {a.status}
      <button onClick={async()=>{await axios.post("/api/admin/approve",{token,id:a._id});alert("Approved")}}>Approve</button>
    </div>)}
  </div>;
}

function App(){
  const [token,setToken]=useState("");
  return <div>
    <h1>Driving License Portal</h1>
    <Register/>
    <hr/>
    <input placeholder="JWT token" value={token} onChange={e=>setToken(e.target.value)}/>
    {token && <AdminPanel token={token}/>}
  </div>;
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
