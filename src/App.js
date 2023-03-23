import React from 'react';
import './App.css';
import Header from './components/Header';
import Summary from './components/Summary';
import TechnicalProficiency from './components/TechnicalProficiency';
import Experience from './components/Experience';
import Education from './components/Education';
import WithAuthenticationRequired from './components/withAuthenticationRequired';

function App() {
  return (
    <div className="App">
      <Header />
      <Summary />
      <WithAuthenticationRequired TechnicalProficiency />
      <WithAuthenticationRequired Experience />
      <WithAuthenticationRequired Education />
    </div>
  );
}

export default App;