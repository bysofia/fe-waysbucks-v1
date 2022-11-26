import React, { useContext } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { LoginContext } from "../components/contexts/LoginContext";
import user from "../Assets/Img/user.svg";
import logo from "../Assets/Logo/waysbucks.png";
import gambar from "../Assets/Img/barcode.png";

function Profile() {    
    const { isLogin, setIsLogin } = useContext(LoginContext);

return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2 className="mb-5 mt-5" style={{color: "red"}} >My Profile</h2>
          <Row>
            <Col className="col-5 col-lg-4">
              <img alt="user" src={user} width="180px" style={{borderRadius: "10px"}} />              
            </Col>
            <Col>
              <div className="mb-5">
                <p>FullName</p>
                <p className="profile-text">Andi</p>
              </div>
              <div className="mb-5">
                <p>Email</p>
                <p className="profile-text">andi@gmail.com</p>
              </div>              
            </Col>
          </Row>
        </Col>
        <Col className="col-12 col-md-6">
          <h2 className="mb-5 mt-5"style={{color: "red"}} >My Transaction</h2>
          <div style={{ maxHeight:'250px', overflow: 'scroll' }}>
          <Card className="shadow border border-dark d-flex mb-3">
            <Card.Body variant="danger" >
              <Row>
                <Col>
                  <Card.Title>Ice Coffee Palm Sugar</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Saturday, 18 November 2022
                  </Card.Subtitle>
                  <Card.Text className="text-danger fw-bold">Total: Rp. 15.000</Card.Text>
                </Col>
                <Col className="ms-1" style={{ textAlign: 'end' }}>
                  <img src={logo} />
                  <br />
                  <img className="ms-1 mt-2" src={gambar}></img>
                </Col>
              </Row>
            </Card.Body>
          </Card>          
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;