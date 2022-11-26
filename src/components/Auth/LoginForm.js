import React, { useState } from 'react';
import { Button, Form, Modal } from "react-bootstrap";
import { Users } from '../DataDummy/Users';

import FormAll from '../Atom/FormAll';

const LoginForm = ({
    show,
    setShow,
    setShowRegister,
    isLogin,
    setIsLogin, 
    setUserRole,   

}) => {    
    const handleClose = () => setShow(false);

    const [userLogin, setUserLogin] = useState({
      email: "",
      password: "", 
      role: "user",     
    });

    function successLogin(email, password) {
      let statusMessage;
      const emailCheck = Users.filter((field) => field.email === email);
  
      if (emailCheck.length === 0) {
        statusMessage = "Email belum terdaftar";
        return {
          status: false,
          message: statusMessage,
        };
      }

      const result = Users.filter((field) => field.password === password);

      if (result.length === 0) {
        statusMessage = "Password Anda Salah";
        return {
          status: false,
          message: statusMessage,
        };
      }
      statusMessage = "Login success";
      return {
        status: true,
        message: statusMessage,
        user: result[0],
      };
    }

    return (
    <Modal
      show={show}
      onHide={handleClose}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >    
      <Modal.Body>
      <Form style={{width: "500px auto", margin: "100px auto"}}>
            <h2 className="tex-center fw-bold" style={{color: "red"}}>Login</h2>
            <Form.Group className="my-3 mt-2">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <FormAll 
                style={{border: "5", borderColor: "red"}} 
                label="Email" 
                type="email" 
                placeholder='Email' 
                value={userLogin.email} 
                onChange={(e) => setUserLogin({...userLogin, email: e.target.value})} />
            </Form.Group>
            <Form.Group className="my-3">
                <Form.Label className="fw-semibold fs-5"></Form.Label>
                <FormAll 
                style={{border: "5", borderColor: "red"}} 
                label="Password" 
                type="password" 
                placeholder='Password' 
                value={Users.password}  
                onChange={(e) => setUserLogin({...userLogin, password: e.target.value})} />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button variant="danger" size="lg"
                onClick={() => {
                  let hasLogin = successLogin(userLogin.email, userLogin.password);
                  if (hasLogin.status) {
                    console.log("success Login");                    
                  } else {
                    console.log("Failed Login");                    
                  }
                  setUserRole(hasLogin.user.role);                  
                  setIsLogin(true);                    
                  

                  setShow(false);
                }}
                >
                    Login
                </Button>      
            </div>
            <div>
                <p>Don't have an account ? Klik{" "}
            <span
              className="fw-bold"
              onClick={() => {
                setShow(false);
                setShowRegister(true);
              }}
            >
              Here
            </span></p>                
            </div>
        </Form>
      </Modal.Body>
      
    </Modal>
        
    );
};

export default LoginForm;