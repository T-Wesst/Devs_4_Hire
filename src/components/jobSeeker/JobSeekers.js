import React, { Component } from 'react';
import JobSeeker from './JobSeeker';

export default class JobSeekers extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: 'John Doe',
          email: 'jdoe@gmail.com',
          phone: '818-818-8118'
        },
        {
          id: 2,
          name: 'Karen Smith',
          email: 'karen@gmail.com',
          phone: '818-224-3234'
        },
        {
          id: 3,
          name: 'Mike Myers',
          email: 'mike@gmail.com',
          phone: '818-211-1122'
        }
      ]
    };
  }
  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map(applicant => (
          <JobSeeker
            key={applicant.id}
            name={applicant.name}
            email={applicant.email}
            phone={applicant.phone}
          />
        ))}
      </div>
    );
  }
}
