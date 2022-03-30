import React from 'react'
import {data} from './components/data'
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import { Yan } from './components/Yan/Yan';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Yan/>
      </Router>
    

    </div>
  );
}

export default App;
