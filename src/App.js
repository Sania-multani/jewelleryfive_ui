import logo from './logo.svg';
import './App.css';
import Index from './component/Index';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Shop from './component/Shop';
import About from './component/About';
import Contact from './component/Contact';
import Blog from './component/Blog';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import Register from './component/Register';
import Profile from './component/Profile';
import Login from './component/Login';
import Detail from './component/Detail';

function App() {
  return (
      <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Index/>}/>
      <Route path="/shop" element={<Shop/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
       <Route path="/blog" element={<Blog/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/checkout" element={<Checkout/>}/>
       <Route path="/login" element={<Login/>}/> 
       <Route path="/register" element={<Register/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/detail" element={<Detail/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
