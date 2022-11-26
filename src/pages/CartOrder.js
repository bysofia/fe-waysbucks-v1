import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  Modal,
  Row,  
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { carts } from "../components/DataDummy/Cart";
import trash from "../Assets/Img/trash-icon.svg";
import { CartContext } from "../components/contexts/CartContext";

function Order() {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);
    const [showOrder, setShowOrder] = useState(false);  
    
    const {dataCart, setDataCart} = useContext(CartContext);
  
    useEffect(() => {
      console.log('testing')
    }, [dataCart]);

  return (
    <Container>  
    <Row className="mt-5">  
      <h2 className="mt-5" style={{color: "red"}} >My Cart</h2> 
    </Row>   
      <h5 className=" mb-3" style={{color: "red"}} >Review Your Order</h5>      
      <div className="mt-4">        
        <Row>
          <Col className="col-lg-8">
            <hr />
          </Col>
          <Col className="d-none d-lg-block">
            <hr />
          </Col>
        </Row>
        <Row>
          <Col>
            {carts.map((item, id) => (
              <Col key={id}>
                <Row className="d-flex align-items-center">
                  <Col>
                    <Row className="d-flex align-items-center text-start">
                      <Col className="col-3">
                        <img
                          src={item.image}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover",
                          }}
                        />
                      </Col>
                      <Col className="col-9 ps-5 ps-lg-0">
                        <h6 className="my-3 fw-bold">{item.name}</h6>
                        <h6 className="my-3">
                        <Button 
                        className="border-0 rounded text-dark"
                        variant="outline-danger"
                        onClick={() => 
                          setDataCart((dataCart) => dataCart - 1)}                         
                        >
                          -
                        </Button>
                            {item.qty}
                        <Button 
                        className="border-0 rounded text-dark"
                        variant="outline-danger"
                        onClick={() => 
                          setDataCart((prev) => prev + 1)}           
                        >
                          +
                        </Button>
                        </h6>
                      </Col>
                    </Row>
                  </Col>
                  <Col className="col-4 text-end">
                    <h6 className="text-danger my-3">Rp. {item.price}.000,-</h6>
                    <h6 className="text-danger my-3">
                    <Button className="bg-light border-0 rounded text-dark"
                        onClick={() => 
                          setDataCart((dataCart) => dataCart - 1)}                         
                        >
                      <img src={trash} />
                    </Button>
                    </h6>
                  </Col>
                </Row>
                <hr />
              </Col>
            ))}
            <Col className="col-12 col-lg-4">
            <Col>
              <Row className="d-flex align-items-center mt-2">
                <Col>
                  <Row className="d-flex align-items-center text-start">
                    <Col>
                      <h6>Subtotal</h6>
                      <h6>Qty</h6>
                      <h6>Ongkir</h6>
                    </Col>
                    <Col className="text-end">
                      <h6>Rp. 60.000</h6>
                      <h6>2</h6>
                      <h6>Rp. 60.000</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <hr style={{ marginTop: "30px" }} />
            </Col>
            <Col>
              <Row className="d-flex align-items-center">
                <Col>
                  <Row className="d-flex align-items-center text-start text-danger">
                    <Col>
                      <h6>Total</h6>
                    </Col>
                    <Col className="col-4 text-end">
                      <h6>Rp. 70.000</h6>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Col>                    
          </Col>

          <Col className="col-12 col-lg-4">
            <Col>
              <Row className="d-flex align-items-center mt-2">
                <Col>
                  <Row className="d-flex align-items-center text-start">
                  <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Phone" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Post Code" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Address" />
                        </Form.Group>
                    </Form>                                    
                  </Row>
                </Col>
              </Row>              
            </Col>            
          </Col>
        </Row>

        <div>
          <Button
            variant="danger"
            className="btn-nav px-5 f-14 fw-bold float-end my-2 w-25"
            onClick={() => navigate("/profile")}
          >
            Pay
          </Button>
          <Modal
            size="xl"
            show={showOrder}
            onHide={() => setShowOrder(false)}
            aria-labelledby="example-modal-sizes-title-lg"
          >            
          </Modal>
        </div>
      </div>
    </Container>
  );
}

export default Order;
