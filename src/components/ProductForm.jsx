// src/components/ProductForm.js
import React, { useState } from "react";
import ProductAPI from "../utils/ProductAPI";

function ProductForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [rate, setRate] = useState("");

 const handleImageChange = (event) => {
  const selectedImage = event.target.files[0];
  if (selectedImage) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  }
  };
  const handleAddProduct = () => {
    const newProduct = {
      id: Date.now().toString(),
      title,
      description,
      price,
      image,
      quantity,
      rate,
    };

    ProductAPI.addProduct(newProduct);
    setTitle("");
    setImage("");
    setPrice("");
    setQuantity("");
    setRate("");
    setDescription("");
    // Redirect or update state as needed after adding the product
// window.location.href="/";

  };
 
  return (
  
    <div className="container my-5 p-5">
      <h2 className="my-5 text-center ">Add Product</h2>
      <form>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="file"
            className="form-control-file"
            // accept="image/*"
            onChange={handleImageChange}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Rate"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="number"
            className="form-control"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProductForm;
