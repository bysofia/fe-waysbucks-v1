import React, { useContext } from "react";
import { 
  Container,
  Image,
  Button,  
  Form,  
 } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { CartContext } from "./contexts/CartContext";
import { Drinks } from "../components/DataDummy/Drinks";
import { ToppingList } from "../components/DataDummy/ToppingList";

export const ProductDetail = () => {
  const { id } = useParams();
  const { dataCart, setDataCart } = useContext(CartContext);

return(
    <Container
    className="row m-auto"
    style={{padding : "30px 90px"}}
    >
        <div className="mb-4 col-5 pe-5">
            <Image src={Drinks[id - 1].image} width="100%"/>
        </div>
        <div className="col-7" style={{ fontSize: "1.15rem" }}>
            <h3 className="fs-1 fw-bolder mb-3 text-danger">{Drinks[id - 1].name}</h3>
            <p className="fs-4 fw-semibold mb-5" style={{color : "#984c4c"}}>Rp.{Drinks[id - 1].price}.000</p>
            <p className="fs-2 fw-bold" style={{color : "#984c4c"}}>Toping</p>
            <div className="row">
                {ToppingList.map((item) => (
                    <div className='col-3 text-center p-0 mb-2 mt-3'>                            
                            <Image src={item.image} className="w-50 mb-2"/>                       
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label={item.name} />                            
                        </Form.Group>
                    </div>
                ))}
            </div>
            <div className='row justify-content-between mt-5 mb-3' style={{color : "#984c4c"}}>
                <p className="col-3 fs-4 fw-bolder">Total</p>
                <p className="col-3 fs-4 fw-bolder text-end">Rp. 31.000</p>
            </div>
            <Button 
            variant='danger' 
            className="w-100 fw-bold"            
                  onClick={() => {
                    setDataCart([...dataCart, {}]);
                  }}
            >Add Cart</Button>
        </div>
    </Container>
)
}