import React from 'react';
import './App.css';

class App extends React.Component {
  
  state = {
      counter: 0
    };
  

  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  
  decrement = () => {
    if (this.state.counter === 0 ){
      this.setState ({
        counter: 0,
      })} else {
      this.setState ({
      counter: this.state.counter - 1
    });
  };
}

  render() {
    return (

   <div className = "container">
    <h1>Counter</h1>
    <h2>{this.state.counter}</h2>  
    <button className="incbtn" onClick={(up) => this.increment(up)}>Increment</button>
    <button className="decbtn" onClick={(down) => this.decrement(down)}>Decrement</button>
  </div>
    );
  }
};

export default App;
