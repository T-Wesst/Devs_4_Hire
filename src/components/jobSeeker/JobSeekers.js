import React, { Component } from 'react';
import JobSeeker from './JobSeeker';
import { Consumer } from '../../context';
export default class JobSeekers extends Component {
  render() {
    return (
      <Consumer>
        {applicants => {
          return (
            <React.Fragment>
              {applicants.map(applicant => (
                <JobSeeker
                  key={applicant.id}
                  image={applicant.image}
                  name={applicant.name}
                  email={applicant.email}
                  phone={applicant.phone}
                  linkedIn={applicant.linkedIn}
                />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}
