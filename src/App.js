import React, { Component } from 'react';
import './App.css';
import JobSeeker from './components/jobSeeker/JobSeeker';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header from './components/header/Header.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header branding="Devs_4_Hire" />
          <JobSeeker
            name="Karren Smith"
            email="karren@gmail.com"
            phone="818-255-2121"
          />
          <JobSeeker
            name="mike Smith"
            email="mike@gmail.com"
            phone="818-123-2121"
          />
        </div>
      </div>
    );
  }
}

export default App;
