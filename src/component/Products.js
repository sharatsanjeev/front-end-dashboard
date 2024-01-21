import React from "react";
import { useState } from "react";

function Product(){
    const[model,setmodel]=useState("");
    const[brand,setbrand]=useState("");
    const[price,setprice]=useState("");


    const senddata=async()=>{
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
            <input type="text" placeholder="company" value={brand} onChange={(e)=>setbrand(e.target.value)} style={{marginBottom: '10px', width:'300px', display:'block', padding: '5px' }}/>
            <input type="text" placeholder="device price" value={price} onChange={(e)=>setprice(e.target.value)} style={{marginBottom: '10px', width:'300px', display:'block', padding: '5px' }}/>
            <button onClick={senddata}>click here</button>
            </center>
            </div>

    )
}

export default Product;