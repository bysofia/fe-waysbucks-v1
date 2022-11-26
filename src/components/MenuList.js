import React, { useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useState } from "react";

import { Drinks } from "../components/DataDummy/Drinks";
import { LoginContext } from "../components/contexts/LoginContext";

import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";
import { useNavigate } from "react-router-dom";

const ContentPatner = () => {
  const navigate = useNavigate();

  const { isLogin, setIsLogin } = useContext(LoginContext);  

  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <Container>
      <h2 className="mt-5 mb-3" style={{color: "red"}} >Lets Order</h2>
      <Row>
        {Drinks.map((item) => (
          <Col className="my-3 col-12 col-md-3">
            <Card 
            width= "16rem" 
            className="shadow"
            style={{ cursor: "pointer" }}
              key={item.id} 
              onClick={() => {                
                !isLogin ? setShowLogin(true) : navigate(`/product-detail/${item.id}`);
              }}
            >
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Text className="font-bold">{item.name}</Card.Text>
                <Card.Text className="text-price">Rp. {item.price}.000,-</Card.Text>                
              </Card.Body>
            </Card>
          </Col>
        ))}
        <LoginForm
          show={showLogin}
          setShow={setShowLogin}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setShowRegister={setShowRegister}
        />
        <RegisterForm
          show={showRegister}
          setShow={setShowRegister}
          setShowRegister={setShowLogin}
        />
      </Row>
    </Container>
  );
};

export default ContentPatner;