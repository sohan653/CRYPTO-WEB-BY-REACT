import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './components/About/About'
import CoinDetails from './components/CoinDetails/CoinDetails'
import Coins from './components/Coins/Coins'
import BdAddress from './components/Contact/BdAddress'
import Contact from './components/Contact/Contact'
import UsAddress from './components/Contact/UsAddress'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Homepage from './components/Homepage/Homepage'
import NotFound from './components/NotFound/NotFound'

const App = () => {
  return (
    <div>
     <Header/>
     <Routes>
       <Route path='/' element={<Homepage/>}></Route>
       <Route path='/coins' element={<Coins></Coins>}></Route>
       <Route path='/coin-details/:id' element={<CoinDetails></CoinDetails>}></Route>
       <Route path='/contact' element={<Contact/>}>
         <Route path='/contact/bd' element={<BdAddress></BdAddress>}></Route>
         <Route path='/contact/us' element={<UsAddress></UsAddress>}></Route>
       </Route>
       <Route path='/about' element={<About></About>}></Route>
       <Route path='*' element={<NotFound/>}></Route>
     </Routes>
     <Footer/>
    </div>
  )
}

export default App
