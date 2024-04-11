import React from 'react';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { useSelector } from 'react-redux';
import PasswordReset from './components/PasswordReset';
import ForgotPassword from './components/ForgotPassword';

const App = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/password-reset' element={<PasswordReset />} />
        <Route path='/forgot-password/:id/:token' element={<ForgotPassword />} />
        {isLoggedIn && <Route path='/user' element={<Welcome />} />}
      </Routes>

    </div>
  )
}

export default App;