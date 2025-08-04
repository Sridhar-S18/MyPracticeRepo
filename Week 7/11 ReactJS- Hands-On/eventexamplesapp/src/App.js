import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 5,
      amount: '',
      currency: '',
      convertedValue: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.sayHello();
    });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayHello = () => {
    alert("Hello! Member1");
  };

  sayWelcome = (message) => {
    alert(`Welcome ${message}`);
  };

  handleClick = (event) => {
    alert("I was clicked");
    console.log("Synthetic event:", event); // this is a React synthetic event
  };

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Example: Convert INR to Euro assuming 1 Euro = 90 INR
    const euroValue = (parseFloat(this.state.amount) / 90).toFixed(2);
    alert(`Converted Value in Euros: €${euroValue}`);
  };

  render() {
    return (
      <div style={{ padding: '20px' }}>
        <div>{this.state.count}</div>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button>
        <button onClick={this.handleClick}>Click on me</button>

        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount:
            <input type="text" value={this.state.amount} onChange={this.handleAmountChange} />
          </label>
          <br />
          <label>
            Currency:
            <textarea value={this.state.currency} onChange={this.handleCurrencyChange}></textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
