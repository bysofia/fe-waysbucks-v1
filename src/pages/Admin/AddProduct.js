import React from "react";
import {
    Container,
    Image,
    Form,
    Row,
    Col,
    Button,
}
from "react-bootstrap";

import FormAll from "../../components/Atom/FormAll";
import tea from "../../Assets/Img/es boba.png";

const AddProduct = () => {
    return (
       <Container>        
        <Row className="mt-5">
            <Col className="mt-5">
                <h1 style={{color: "red"}}>Product</h1>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="name" placeholder="Product Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label></Form.Label>
                <Form.Control type="number" placeholder="Price" />
            </Form.Group>
            <Form.Group controlId="formFileSm" className="mb-3">
                <Form.Label></Form.Label>
                <Form.Control type="file" size="sm" placeholder="Photo Product" />        
            </Form.Group>
            <Button variant="danger" className="btn-nav w-25 mt-5" type="submit">Add Product</Button>
            </Col>            
            <Col className="col-12 col-lg-5 mt-5">
                <Image src={tea} height="300px" />
            </Col>
        </Row>     
    </Container>
    );
}

export default AddProduct;