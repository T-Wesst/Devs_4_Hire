import React, { Component } from 'react';
import { Consumer } from '../../context';
// Subclass component
export default class JobSeeker extends Component {
  render() {
    // destructuring props
    const { name, email, phone, linkedIn, image, title, bio, github, portfolio } = this.props;
    return (
      <Consumer>
        {() => {
          return (
            <div className="card-body">
              <div className="card" style={{ width: '18rem' }}>
                <img src={image} alt={name} className="img-card-top" />
                <div class="card-body">
                  <h5 class="card-title">{name}
                    <a href={linkedIn} rel="noopener noreferrer" target="_blank">
                      <i class="fab fa-linkedin" />
                    </a>
                    <a href={github}>
                      <i class="fab fa-github" />
                    </a>
                    <a href={portfolio}>
                      <i class="fas fa-folder-open" />
                    </a>
                  </h5>
                  <h6 class="card-subtitle mb-2 text-muted">{title}</h6>
                  <p class="card-text">Bio: {bio}</p>
                  <a href={phone} className="btn btn-primary">
                    <i className="fas fa-phone" /> Contact
                  </a>
                  <a href={`mailto:${email}?Subject=Hello ${name}`} className="btn btn-danger">
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
