import React, { useState } from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from "./components/About";
import Services from "./components/Services";
import Work from "./components/Work";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ContactForm from "./components/ContactForm";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const [toastPosition, setToastPosition] = useState('top-right');

  return (
    <div className="bg-black App">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Services />
      <Work />
      
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
