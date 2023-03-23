import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import TechnicalProficiency from './components/TechnicalProficiency';
import Experience from './components/Experience';
import Education from './components/Education';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <div className="card">
                    <div className="card-body">
                      <Header />
                      <Summary />
                    </div>
                  </div>
                  <div className="card mt-3 mb-3">
                    <div className="card-body">
                      <TechnicalProficiency />
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <Education />
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <Experience />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          } />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
