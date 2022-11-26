import React, { useContext, useState } from "react";
import "../style/index.css";
import { 
  Container,
  Navbar,
  Nav,
  NavbarBrand, 
  Dropdown,
  Badge,
  Button,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

import logo from "../Assets/Logo/waysbucks.png";
import admin from "../Assets/Img/user-admin.svg";
import userIcon from "../Assets/Img/user-icon.svg";
import logoutIcon from "../Assets/Img/logout-icon.svg";
import cart from "../Assets/Img/cart.svg";
import addProduct from "../Assets/Img/add-product.svg";
import addTopping from "../Assets/Img/add-topping.svg";


import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import { LoginContext } from "../components/contexts/LoginContext";
import { CartContext } from "../components/contexts/CartContext";

const Navbars = () => {
    const navigate = useNavigate();

    const { isLogin, setIsLogin } = useContext(LoginContext);
    const { dataCart, setDataCart } = useContext(CartContext);
    
    const [userRole, setUserRole] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    return ( 
        <div>
        <Navbar bg="light" expand="lg" className="shadow-sm">
            <Container>
                <Link to="/" style={{ textDecoration: "none" }}>
                <NavbarBrand>
                    <img 
                        src={logo}
                        alt="dumbways"
                        width="50" 
                        className="dumbways-logo"
                        />
                </NavbarBrand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse
                    id="responsive-navbar-nav"
                    className="justify-content-end"
                >
                    {!isLogin ? (
                    <div>
                    <Button
                        className="btn-login"
                        variant="outline-danger"
                        onClick={() => setShowRegister(true)}
                    >
                      Register
                    </Button>
                    <Button
                        className="btn-register"
                        variant="danger"
                        onClick={() => setShowLogin(true)}
                    >
                      Login
                    </Button>
                  </div>
                    ) : userRole === "user" ? (
                <div>
                <Dropdown>
                {dataCart.length >= 0 && (
                    <Badge
                      style={{ width: "20px", height: "20px" }}
                      className="bg-danger position-absolute badge"
                    >
                      {dataCart.length}
                    </Badge>
                  )}                
                    <img 
                    src={cart} 
                    width= "30"                  
                    className="mx-3"
                    style={{ cursor: "pointer" }}
                    onClick={() => navigate("/cart-order")}
                    />
                                                                                
                  <Dropdown.Toggle variant="bg-light" id="dropdown-basic">
                    <img src={admin} width="30" style={{borderRadius: "100%"}} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/profile")}>
                      <img className="me-3" src={userIcon} width="30" />
                      Profile
                    </Dropdown.Item>                    
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => {
                        setIsLogin(false);
                        navigate("/");
                      }}
                    >
                      <img className="me-3" src={logoutIcon} width="30" />
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
                    ) : (
                      <div>
                <Dropdown>
                  <Dropdown.Toggle variant="bg-yellow" id="dropdown-basic">
                    <img src={admin} width="30" style={{borderRadius: "100%"}} />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => navigate("/add-product")}>
                      <img className="me-3" src={addProduct} width= "25" />
                      Add Product
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/add-topping")}>
                      <img className="me-3" src={addTopping}  width= "25" />
                      Add Topping
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => navigate("/transaction")}>
                      <img className="me-3" src={cart}  width= "25" />
                      Transaction
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      onClick={() => {
                        setIsLogin(false);
                        navigate("/");
                      }}
                    >
                      <img className="me-3" src={logoutIcon} width="25" /> 
                      Logout
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <LoginForm
         show={showLogin}
         setShow={setShowLogin}
         isLogin={isLogin}
         setIsLogin={setIsLogin}
         setShowRegister={setShowRegister}
         setUserRole={setUserRole} 
         />

                    
        <RegisterForm
          show={showRegister}
          setShow={setShowRegister}                   
          setShowLogin={setShowLogin}
          />
        </div>
     );
}
 
export default Navbars;