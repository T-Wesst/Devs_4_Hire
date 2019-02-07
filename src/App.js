import React, { Component } from 'react';
import JobSeekers from './components/jobSeeker/JobSeekers';
import Header from './components/header/Header.js';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from './context';
class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <div className="container">
            <Header branding="Devs_4_Hire" />
            <JobSeekers />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
