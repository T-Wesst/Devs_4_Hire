import React, { Component } from 'react';
import applicants from './applicants.json';
// import axios from 'axios';
const Context = React.createContext();
export class Provider extends Component {
  render() {
    return (
      // Provider holds entire state of application
      <Context.Provider value={applicants}>
        {this.props.children}
        {console.log(applicants)}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
