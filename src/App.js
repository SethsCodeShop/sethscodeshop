import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import TechnicalProficiency from './components/TechnicalProficiency';
import Experience from './components/Experience';
import Education from './components/Education';
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 mb-3">
            <div className="card">
              <div className="card-body">
                <Header />
                <Experience />
                <Education />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <Summary />
                <TechnicalProficiency />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
