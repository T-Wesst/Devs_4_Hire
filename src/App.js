import React, { Component } from 'react';
import './App.css';
import JobSeekers from './components/jobSeeker/JobSeekers';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header branding="Devs_4_Hire" />
          <JobSeekers />
        </div>
      </div>
    );
  }
}

export default App;
