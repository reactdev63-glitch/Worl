import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Explore from './Pages/Explore'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'
import PackageDetails from './Pages/PackageDetails'
import BookingPackage from './Pages/BookingPackage'
import Destination from './Pages/Destination'
import Loginpop from './Components/Loginpop'


const App = () => {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
    
      <Navbar setshowLogin={setshowLogin} />
      {showLogin?<Loginpop setshowLogin={setshowLogin}/>:<></>}


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/details/:id" element={<PackageDetails/>} />
        <Route path="/bookings/:id" element={<BookingPackage/>} />
      </Routes>

      <Footer/>
    </>
  )
}

export default App