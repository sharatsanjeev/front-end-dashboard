
import React, { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


const SignUp=()=>{

const [name,setname]=useState("");
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
  
    
    console.log(name,email,password)
    let result=await fetch('http://localhost:5000/register',{
        method:'post',
        body:JSON.stringify({name,email,password}),
        headers:{'Content-Type':'application/json'},
    });
    result=await result.json();
    console.log(result);
    localStorage.setItem('key',JSON.stringify(result));
    
    if(result){
       
        navigate('/')    
    }  

    
}

return(

    <div>
        <center>
<input type="text" value={name} onChange={(e)=>setname(e.target.value)}  style={{ display:'block',width:'300px', marginBottom: '10px', padding: '5px' }} placeholder="Enter name" />
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

export default SignUp;