
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const LogIn=()=>{

const [email,setid]=useState("");
const [password,setpwd]=useState("");
const navigate=useNavigate();


useEffect(()=>{
    const auth=localStorage.getItem('key')
    if(auth)
    {
        navigate("/") 
    }

})

const collectdata=async()=>{
    console.log(email,password)
    let result=await fetch('http://localhost:5000/login',{
        method:'post',
        body:JSON.stringify({email,password}),
        headers:{'Content-Type':'application/json'}
    });
    result=await result.json();
    console.log(result);

    localStorage.getItem('key',JSON.stringify(result.auth));
    if(result.auth){
      
        navigate('/')
    }  
    else{
        alert("enter correct details")
    }
    

}

return(

    <div>
        <center>
<input type="text"  style={{ marginBottom: '10px', width:'300px', display:'block', padding: '5px' }} placeholder="Enter Email" value={email} onChange={(e)=>setid(e.target.value)}/>
<input type="password"  style={{ marginBottom:  '10px', width:'300px', display:'block', padding: '5px' }} placeholder="Enter pssword"value={password} onChange={(e)=>setpwd(e.target.value)}/>
<button onClick={collectdata}  style={{ 
           display:'block',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}type="button">Sign-up</button>
    
    </center>

    </div>


)

}

export default LogIn;