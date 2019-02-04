import React, { Component } from 'react';
import './App.css';
import JobSeeker from './components/jobSeeker/JobSeeker';
import Header from './components/header/Header.js';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobSeeker
          name="Karren Smith"
          email="karren@gmail.com"
          phone="818-255-2121"
        />
      </div>
    );
  }
}

export default App;
