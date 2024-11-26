import './App.css';

import {BrowserRouter, Link, Routes, Route} from 'react-router';

import Home from './components/Home';
import About from './components/About';
import Nav from './components/Nav';
import Products from './components/Products';
import Product from './components/Product';

const App = () => {
  return (
    <div className="App">
      <h2>React Router Demo</h2>
      <BrowserRouter>
        <Nav />
      
        <Routes>
          <Route path="*" element={<h2>Four oh four page</h2>} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/admin" element={<h2>Admin Page</h2>} />
          <Route path="/products/:product_id" element={<Product />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  );
};

export default App;
