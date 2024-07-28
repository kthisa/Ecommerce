
import { useState } from 'react'
import './App.css'
import Detail from './Components/Detail'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'
import {BrowserRouter as Router ,Routes, Route} from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Cart from './Components/Cart'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Components/Sign'
import Login from './Components/Login'


function App() {
  const [card,setCard]=useState([]);
 
  return (
    <>

    <Router>
      <div>
        <ToastContainer theme='dark' position='top-center' />
      <Header card={card} />
     
      <Routes>
        <Route path='/' element={ <Home/>}/>
        <Route path='/search' element={ <Home/>}/>
        <Route path='/product/:id' element={<Detail card={card} setCard={setCard} />}/>
        <Route path='/cart' element={<Cart card={card} setCard={setCard} />}/>
        <Route path='/signup' element={<Signup />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Routes>
      </div>
    </Router>

      <Footer/>
    </>
  )
}

export default App
