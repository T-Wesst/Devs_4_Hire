import React, { Component } from 'react';
import { Consumer } from '../../context';
// Subclass component
export default class JobSeeker extends Component {
  render() {
    // destructuring props
    const { name, email, phone, linkedIn } = this.props;
    return (
      <Consumer>
        {() => {
          return (
            <div className="card card-body">
              <ul className="list-group">
                <li className="list-group-item">Email: {email}</li>
                <li className="list-group-item">Phone: {phone}</li>
                <li className="list-group-item">Name: {name}</li>
                <li className="list-group-item">LinkedIn: {linkedIn}</li>
              </ul>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
