import React from 'react';
import Header from './components/Header';
import { Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Signup from './components/Signup';
import Login from './components/Login';
import Welcome from './components/Welcome';

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path='/logout' element={<Login />} /> */}
        <Route path='/user' element={<Welcome />} />
      </Routes>

    </div>
  )
}

export default App;