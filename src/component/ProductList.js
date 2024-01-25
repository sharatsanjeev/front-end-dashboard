import { useEffect, useState } from "react"

const ProductList=()=>{
    const[products,setproduct]=useState([])

    
    useEffect(()=>{

        getproducts();
    },[])

    const getproducts=async()=>{

        let result=await fetch('http://localhost:5000/product');
        result=await result.json()
        setproduct(result);

    }   
    console.log("product",products)
    let filtproduct=products.filter(products=>products.price>1000)

    const dltbyid=async(id)=>{
      let result=await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete"
      });
      result=await result.json();
      if(result){
        console.log(`the id ${id} is deleted`)
        getproducts();

      }

    }



return(
<>
    <div className="products">
          <h3>List of Products</h3>
          
            <ul>
             <li>s.no</li>
             <li>name</li>
             <li>model</li>
             <li>price</li>
             <li>delete</li>
            
            </ul>
           
            {filtproduct.map((product, index) => (
        <ul key={index}>
          <li>{index + 1}</li>
          <li>{product.model || "-"}</li>
          <li>{product.brand }</li>
          <li>{ product.price || "-"}</li>
          <li><button onClick={()=>dltbyid (product._id)} > Delete </button> </li>
        </ul>
      ))}
            </div>
            
</>

)

}

export default ProductList;