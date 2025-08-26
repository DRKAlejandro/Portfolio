// src/App.js
//import React from 'react';
import Header from './components/Header';
import "./styles/theme.css";

 import Home from './pages/Home';
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Skills from './pages/Skills';
// import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="pt-16">
       <Home />
      </main>
    </div>
  );
}

export default App;