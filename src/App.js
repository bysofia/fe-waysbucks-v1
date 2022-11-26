import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbars from "./components/NavBars";
import Home from "./pages/Home";
import Profile from "./pages/UserProfile";
import CartOrder from "./pages/CartOrder";
import { LoginContext } from "./components/contexts/LoginContext";
import { CartContext } from "./components/contexts/CartContext"; 
import { ProductDetails } from "./pages/ProductDetails";
import AddProduct from "./pages/Admin/AddProduct";
import AddTopping from "./pages/Admin/AddTopping";
import Transaction from "./pages/Admin/Transaction";


function App() {
  const [isLogin, setIsLogin] = useState(false); 
  const [dataCart, setDataCart] = useState([]);

  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}> 
    <CartContext.Provider value={{ dataCart, setDataCart }}>     
        <Router> 
          <Navbars />                    
              <Routes>              
                  <Route path="/" element={<Home />} />
                  <Route path="/cart-order" element={<CartOrder />} />
                  <Route path="/profile" element={<Profile />} />           
                  <Route path="/product-detail/:id" element={<ProductDetails />} />
                  <Route path="/add-product" element={<AddProduct />} />           
                  <Route path="/add-topping" element={<AddTopping />} />           
                  <Route path="/transaction" element={<Transaction />} />           
              </Routes>         
        </Router>
      </CartContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
