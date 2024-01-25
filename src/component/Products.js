import React from "react";
import { useState } from "react";

function Product(){
    const[model,setmodel]=useState("");
    const[brand,setbrand]=useState("");
    const[price,setprice]=useState("");
    const[error,seterror]=useState(false);
    
    const senddata=async()=>{
        if(!model || !brand || !price)
        {
         seterror(true)
          return false;
         }

        let data=await fetch('http://localhost:5000/Product',{
            method:'post',
            body:JSON.stringify({ model,brand,price}),
            headers:{'Content-type':'application/json'}
        });
        console.log(data)
        
    }

    

    return(
       
        <div>
             <center>
            <input type="text" placeholder="device model" value={model} onChange={(e)=>setmodel(e.target.value)} style={{marginBottom: '10px', width:'300px', display:'block', padding: '5px' }}/>
            {error && !model && <span style={{color:"red",fontFamily:"times"}}>enter name</span>}
            <input type="text" placeholder="company" value={brand} onChange={(e)=>setbrand(e.target.value)} style={{marginBottom: '10px', width:'300px', display:'block', padding: '5px' }}/>
            {error && !brand && <span style={{color:"red",fontFamily:"times"}}>enter brand</span>}
            <input type="text" placeholder="device price" value={price} onChange={(e)=>setprice(e.target.value)} style={{marginBottom: '10px', width:'300px', display:'block', padding: '5px' }}/>
            {error && !price && <span style={{color:"red",fontFamily:"times"}}>enter rate</span>}
            <button onClick={senddata}>click here</button>
            </center>
            </div>

    )
}

export default Product;