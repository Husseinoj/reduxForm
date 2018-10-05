//import React from "react";
import React, {Component} from 'react';

import { Values } from "redux-form-website-template";

import showResults from "./showResults";
import SimpleForm from "./SimpleForm";

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ padding: 15 }}>
          <h2>Simple Form</h2>
          <SimpleForm onSubmit={showResults} name="hassan"/>
          <Values form="hassan" />
          <SimpleForm onSubmit={showResults} name="jafar"/>
          <Values form="jafar" />
        </div>
      </div>
    );
  }
}

export default App;
