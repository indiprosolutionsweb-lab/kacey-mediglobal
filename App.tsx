
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Values from './components/Values';
import GlobalReach from './components/GlobalReach';
import Products from './components/Products';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Products />
        <GlobalReach />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </div>
  );
};

export default App;