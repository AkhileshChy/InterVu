import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Domain from './pages/Domain'
import Interview from './pages/Interview'
import FinalAnalysis from './pages/FinalAnalysis'
import Navbar from './components/Navbar'
import Feedback from './pages/Feedback'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/domain' element={<Domain />} />
        <Route path='/interview' element={<Interview />} />
        <Route path='/finalAnalysis' element={<FinalAnalysis />} />
        <Route path='/feedback' element={<Feedback />} />
      </Routes>
    </>
  )
}

export default App
