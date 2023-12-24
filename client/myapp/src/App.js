
import './App.css';
// open index.js and setup CreateBrowser router
import { Route,Routes } from 'react-router-dom'
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
// 
function App() {
  return (
   <>
   <Header/>
   <Outlet/>
  
   
   <Footer/>

   
   </>
  );
}

export default App;
