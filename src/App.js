import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactForm from './ContactForm';

class App extends Component {
  handle=(values)=>{
    console.log("parentSubmit",values);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React x redux-form</h1>
        </header>
        <div className="container">
          <p className="App-intro">
            Contact Form
          </p>
        <ContactForm onSubmit={this.handle}/>
        </div>
      </div>
    );
  }
}

export default App;
