


import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/Navbar';
import About from './pages/About/About';
import BlogsPage from './pages/Blogs/BlogsPage';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import SignupPage from './pages/Signup/SignupPage';

function App() {
  return (
    <div className="App flex flex-col">
      <Navbar />
      <BrowserRouter>
      <SignupPage/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
