import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation
} from 'react-router-dom';

import Signup from './components/Signup';
import Signin from './components/Signin';
import Navbar from './components/Navbar';
import AddProduct from './components/AddProduct';
import Makepayment from './components/Makepayment';
import Aboutus from './components/Aboutus';
import Home from './components/Home';
import Carousel from './components/Carousel';
import BrandHeader from './components/BrandHeader';
import React from 'react';
import Sidebar from './components/Sidebar';
import CartSidebar from './components/CartSidebar';

function AppContent() {
  const location = useLocation();

  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [cart, setCart] = React.useState([]);
  const [cartOpen, setCartOpen] = React.useState(false);

  const hideNavbar =
    location.pathname === "/signin" ||
    location.pathname === "/signup" ||
    location.pathname === "/addproduct";
  
  const addToCart = (product) => {
  setCart((prev) => [...prev, product]);
  };
  // remove the cart function
  const removeFromCart = (indexToRemove) => {
  setCart((prev) =>
    prev.filter((_, index) => index !== indexToRemove)
  );
};

  return (
    <div className="App">
      <BrandHeader/>

      {!hideNavbar && <Navbar openSidebar={() => setOpen(true)}onSearch={setSearch} cart={cart} openCart={() => setCartOpen(true)}/>}
      
      <Sidebar open={open} close={() => setOpen(false)} />

      <CartSidebar cart={cart} cartOpen={cartOpen} closeCart={() => setCartOpen(false)} removeFromCart={removeFromCart}/>
        
      <Routes>
        <Route path='/' element={<Home openSidebar={() => setOpen(true)} search={search} addToCart={addToCart}/>} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/makepayment' element={<Makepayment />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/carousel' element={<Carousel />} />
      </Routes>
    </div>
  );
}


//  MAIN APP
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
