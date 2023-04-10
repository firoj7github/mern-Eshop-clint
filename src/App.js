import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/Header';
import Booking from './components/Booking';
import Contact from './components/Contact';

import Product from './components/Product';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/booking" element={<Booking></Booking>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/product" element={<Product></Product>}></Route>
     </Routes>
     <Footer></Footer>
      
    </div>
  );
}

export default App;
