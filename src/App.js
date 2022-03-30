import React from 'react'
import data from './components/data'
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router} from 'react-router-dom'
import Yan from './components/Yandan/Yan';


function App() {

  const { productItem }  = data;

  return (
    <div className="App">
      <Router>
   
   


      <Header />
      <Yan productItem={productItem}/>
      </Router>
    

    </div>
  );
}

export default App;
