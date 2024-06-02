import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import CompanyInfo from './components/CompnyInfo';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      {/* <Route path="/company-info" element={<CompanyInfo />} /> */}
    </Routes>
  );
};



export default App;
