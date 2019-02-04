import React, { Component } from 'react';
// Subclass component
export default class JobSeeker extends Component {
  render() {
    // destructuring props
    const { name, email, phone } = this.props;
    return (
      <div className="card card-body">
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
          <li className="list-group-item">Name: {name}</li>
        </ul>
      </div>
    );
  }
}
