import React, { Component } from 'react';
import Tabla from './components/Tabla'
import './App.css';

class App  extends Component {

  constructor(){
    super();
  }

  render(){
    return(
      <div className="conteiner">
        <Tabla />
      </div>

    )
  }

}

export default App;
