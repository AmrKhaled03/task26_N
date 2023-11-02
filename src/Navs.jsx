import React from 'react'
import { Link  } from 'react-router-dom' ;
import "./App.css"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Container from 'react-bootstrap/Container';
import {  faUser } from '@fortawesome/free-solid-svg-icons'

import NavDropdown from 'react-bootstrap/NavDropdown';
import { faCartShopping  } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 const Navs = ( props) => {
  




  return (

    <div>

          <Navbar expand="lg" className="body-tertiary navbar px-5 py-3">
              <Container className="container">
              <Link  className=" brand "to="/">
                    <h3 >
                      Squeeze
                    </h3>
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav" className='basic-navbar-nav'>
                      <Nav className="ms-auto navs" >
                 
    
 <NavDropdown title="Dashboard" id="basic-nav-dropdown">

           
              <NavDropdown.Item  as={Link} to="/products">Products</NavDropdown.Item>
              <NavDropdown.Item  as={Link} to="/products/add">Add Product</NavDropdown.Item>


       
            </NavDropdown>
                          <Link className="link p-2 " to="/">
                             Home </Link>
                                <a href="/#about" className='link p-2'>
                         
                         
                             About Us 
                        
                            
                            
                                </a>
                             <a href="/#items" className='link p-2'>   

                            
                               Juices
                           
                           

 </a>

  <a href="/#contact" className='link p-2'>

                          
                               Contact Us
                           

 </a>
            {!props.loggedInUser ? (

<>

  <Link className="link p-2" to="/register">
    Register
  </Link>


<Link className="link p-2" to="/login">
 Login
</Link>

</>

):<>
  
  <Link className="link p-2" to="/profile">
  <FontAwesomeIcon icon={faUser} />
  </Link>


  <button
    className="btn btn-danger btn-md   "
    onClick={props.handleLogout}
  >
    Logout
  </button>




</>


}
                          <Link className="link p-2 " to="/cart"  ><FontAwesomeIcon icon={faCartShopping}className="fa-cart"  /> <span className="count ms-sm-0 ps-lg-4 ms-lg-2 ">{props.cart.length}</span></Link>
                      </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>

    </div>
  )
}

export default Navs