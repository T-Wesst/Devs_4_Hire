import React, { Component } from 'react';
import './App.css';
import JobSeeker from './components/jobSeekers/JobSeeker';

class App extends Component {
  render() {
    return (
      <JobSeeker name="mike" email="mike@gmail.com" phone="818-818-9920" />
    );
  }
}

export default App;
