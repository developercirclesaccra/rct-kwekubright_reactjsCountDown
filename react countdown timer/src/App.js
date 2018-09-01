import React, { Component } from 'react';
import Wrapper from "./components/calculator/Main.js";
import './App.css';

class App extends Component {

  state = {
    paused: false,
    stopped: false,
    resetted: false,
    started: false,
    input: null,
    value: ''
  }


  render() {
    return (
      <div className="App">
        <Wrapper sysState={this.state}> </Wrapper>
        {console.log(this.state)}
      </div>
      
    );
    
  }
}

export default App;
