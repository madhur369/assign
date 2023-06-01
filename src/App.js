import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupForm from './components/SignupForm';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/Dashboard';
function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/signin' element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
