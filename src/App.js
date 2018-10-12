import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WizardForm from './WizardForm';
class App extends Component {
 
  submitHandle = values =>{
    console.log("Submit Form",values);
  };
  render() {
    return (
      <div>
        <h2>Hello Man</h2>
        <WizardForm onSubmit={this.submitHandle}/>
      </div>
    )
  }
}

export default App;