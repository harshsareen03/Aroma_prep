
import './App.css';
// open index.js and setup CreateBrowser router
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header';
import Home from './components/detail/Home';
import About from './components/About';
import Contact from './components/Contact';
import Cart from './components/Cart';
import Signin from './components/detail/Signin';
import Product from './components/Product';
// 
function App() {
  return (
   <>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/signin' element={<Signin/>}/>
   </Routes>
   <Product/>

   
   </>
  );
}

export default App;
