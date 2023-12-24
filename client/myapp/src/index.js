import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// importing  CreateBrowserRouter for give a route or navigate link from one comonent to another component
import Home from './components/detail/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Signin from './components/detail/Signin';


import {
  
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ProductDet from "./components/detail/ProductDet";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/"  element={<Home />} />
      <Route path="/product/:id"  element={<ProductDet />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/signin" element={<Signin />} />
    </Route>
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // wrap up App component in CreateBrowserRouter

  <React.StrictMode>
    
     <RouterProvider router={router}/>
    
  </React.StrictMode>
);


reportWebVitals();
