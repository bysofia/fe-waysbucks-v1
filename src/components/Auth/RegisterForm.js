import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

import FormAll from "../Atom/FormAll";

const RegisterForm = ({
    show,
    setShow,
    setShowLogin,
}) => {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
    <> 
    <Modal
      show={show}
      onHide={handleClose}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    > 
    <Modal.Body>
        <Form style={{width: "100px flex", margin: "100px auto"}}>
            <h2 className="tex-center fw-bold" style={{color: "red"}}>Register</h2>
            <Form.Group className="my-3 mt-4">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <FormAll style={{border: "5", borderColor: "red"}} label="Email" type="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="my-3">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <FormAll style={{border: "5", borderColor: "red"}} label="Password" type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="my-3">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <FormAll style={{border: "5", borderColor: "red"}} label="Full Name" type="text" placeholder="Full Name" />
            </Form.Group>
            <Form.Group className="my-3">
            <Form.Select style={{border: "5", borderColor: "red"}} aria-label="Default select example m-5 fs-5">
                  <option hidden style={{border: "5", borderColor: "red"}}>Role</option>
                  <option value="1">User</option>
                  <option value="2">Patner</option>
            </Form.Select>
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="danger" size="lg" onClick={() => setShow(false)}>
                    Register
                </Button>      
            </div>
            <div>
                <p>Already have an account ? Klik{" "}
            <span
              className="fw-bold"
              onClick={() => {
                setShow(false);
                setShowLogin(true);
              }}
            >
              Here
            </span></p>                
            </div>
        </Form>
    </Modal.Body>
</Modal>
</>
    );
};

export default RegisterForm;