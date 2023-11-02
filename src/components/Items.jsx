import React ,{useState,useEffect } from 'react'
import ProductAPI from "../utils/ProductAPI";

import "../App.css"
const Items = ({addCart}) => {

  // const products = ProductAPI.getAllProducts();
  // localStorage.getItem("products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = ProductAPI.getAllProducts();
    setProducts(storedProducts);
  }, []);
const[visable,setVisable]=useState(false);

 const openMen=()=>{
    setVisable(!visable);

}
  return (




 <div id='items' className='my-5 py-5 items'>

        <div className="container d-flex justify-content-center align-items-center flex-column ">
            <div className="row text-center">
                <div className="col-lg-12">
                    <h1 className='special-heading mb-5'>
Juices
                    </h1>
                </div>
            </div>
          
{visable===false ? <div className='d-flex justify-content-center align-items-center'>    <button  className="btn btn-lg btn-primary" style={{borderRadius:50}} onClick={openMen} type='button'>Show Menu</button> </div>   :  

            <div className={visable===false ?"d-none" : "  row w-100"}>
            {products.map((product) => (
<div className={product.rate<2.5?"card-item2 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex jusify-content-center align-items-center border  " : "card-item col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex jusify-content-center align-items-center border "} key={product.id}>
<img className='img-fluid w-25 h-75 me-3' src={product.image} alt={product.title} style={{borderRadius:100}}/>
<div className="card-body d-flex flex-column w-75">
 <h4 className='text-white title me-2'>
    {product.title}
</h4>
<p className="text-white desc">
{product.description}
</p>
<span className={product.price <100 ?"text-white bg-danger w-25  price text-center overflow-hidden card-btn" : "text-white w-25 bg-success price text-center overflow-hidden card-btn"}>
${product.price}
</span>   
<span className={product.rate<3 ? "rate bg-danger   text-white" : "rate  bg-success text-white"}>
{product.rate}
</span>
<button className='btn btn-success btn-sm w-25  my-3 overflow-hidden card-btn' style={{borderRadius:50}} onClick={()=>addCart(product)}>
    Add To Cart
</button>

</div>


</div>
                )

                

                

                )}
     
            </div>
      }
        </div>
    </div>





   
  )
}

export default Items