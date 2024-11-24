import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import SignOut from './pages/SignOut'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Header from './components/Header'

export default function App() {
  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Sign-up" element={<SignUp />} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-out" element={<SignOut/>} />
    <Route path="/Profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
}
