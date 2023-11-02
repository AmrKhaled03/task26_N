// src/components/ProductList.js
import React ,{useState,useEffect}from "react";
import ProductAPI from "../utils/ProductAPI";
// import { Link } from "react-router-dom";
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';

function ProductList() {
  // const products = ProductAPI.getAllProducts();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = ProductAPI.getAllProducts();
    setProducts(storedProducts);
  }, []);

  // const handleProductAdded = () => {
  //   setProducts(ProductAPI.getAllProducts());
  // };

  // const handleDeleteProduct = (id) => {
  //   ProductAPI.deleteProduct(id);
  //   setProducts(ProductAPI.getAllProducts());
  // };

 
  return (
   
    <div className="container mt-5 pt-5">
    <h2 className="my-5 text-center">Product List</h2>
    <div className="table-responsive">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rate</th>

            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxWidth: '100px' }}
                />
              </td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.rate}</td>

              <td>{product.quantity}</td>
              <td >
                <a href={`/products/${product.id}`} className="btn btn-primary me-2 ">
                  <FaEye />
                </a>
                <a href={`/products/edit/${product.id}`} className="btn btn-warning me-2 ">
                  <FaEdit /> 
                </a>
                <a href={`/products/delete/${product.id}`} className="btn btn-danger ">
                  <FaTrash /> 
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

export default ProductList;
