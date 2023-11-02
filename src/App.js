import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import ProductList from "./components/ProductList";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";
import EditProduct from "./components/EditProduct";
import DeleteProduct from "./components/DeleteProduct";
import Navs from "./Navs";
import Cart from "./components/Cart";
import Swal from "sweetalert2";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loggedInUsername, setLoggedInUsername] = useState(null);

  useEffect(() => {
    const loggedInUserData = localStorage.getItem("loggedInUser");
    if (loggedInUserData) {
      const { email, username } = JSON.parse(loggedInUserData);
      setLoggedInUser(email);
      setLoggedInUsername(username);
    }
  }, []);

  const handleLogin = (userEmail, userUsername) => {
    setLoggedInUser(userEmail);
    setLoggedInUsername(userUsername);
    localStorage.setItem(
      "loggedInUser",
      JSON.stringify({ email: userEmail, username: userUsername })
    );
  };

  const handleLogout = () => {
    setLoggedInUser(null);
    setLoggedInUsername(null);
    localStorage.removeItem("loggedInUser");
  };

  const cartStorage = JSON.parse(localStorage.getItem("cart")) || [];

  const [cart, setCart] = useState(cartStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  });

  const addCart = (item) => {
    let productItem = cart.find((product) => product.id === item.id);
    if (productItem) {
      productItem.quantity += 1;
      setCart([...cart]);
      Swal.fire(
        "Product is added successfully!",
        "You clicked the button!",
        "success"
      );
    } else {
      item.quantity = 1;
      setCart([item, ...cart]);
      Swal.fire(
        "Product is added successfully!",
        "You clicked the button!",
        "success"
      );
    }
  };
  const updateCartItem = (item) => {
    let productItem = cart.find((product) => product.id === item.id);

    if (productItem) {
      productItem.quantity += 1;
      setCart([...cart]);
      if (productItem.quantity === 0) {
        setCart(cart.filter((product) => product.id !== item.id));
      }
    } else {
      setCart([...cart]);
    }
  };

  const decCartItem = (item) => {
    let productItem = cart.find((product) => product.id === item.id);

    if (productItem) {
      productItem.quantity -= 1;
      setCart([...cart]);
      if (productItem.quantity === 0) {
        setCart(cart.filter((product) => product.id !== item.id));
      }
    } else {
      setCart([...cart]);
    }
  };
  const delItem = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };
  const delAll = () => {
    setCart([]);
  };
  return (
    <>
      <Navs
        loggedInUser={loggedInUser}
        handleLogout={handleLogout}
        cart={cart}
      />

      <Routes>
        <Route index path="/" exact element={<Home addCart={addCart} />} />

        <Route path="/products" element={<ProductList />} />

        <Route path="/products/add" element={<ProductForm />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/products/delete/:id" element={<DeleteProduct />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route
          path="/cart"
          element={
            <Cart
            cart={cart}
              decCartItem={decCartItem}
              delAll={delAll}
              delItem={delItem}
              updateCartItem={updateCartItem}
            />
          }
        />

        <Route
          path="/profile"
          exact
          element={
            <UserProfile email={loggedInUser} username={loggedInUsername} />
          }
        />
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
