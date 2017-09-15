import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router-dom'
import { ALL_CONTACTS_QUERY } from './query';
import Calls from '../Calls/Calls';

class ContactsList extends Component {
  render() {
    console.log(this.props)
    if (this.props.contacts && this.props.contacts.loading) {
      return <div>Loading</div>
    }

    if (this.props.contacts && this.props.contacts.error) {
      return <div>Error</div>
    }

    const contacts = this.props.contacts.allContacts;
    return (
      <div>
        total contacts: {this.props.contacts._allContactsMeta.count}
        {contacts.map((c) => (
          <div key={c.id} style={{ border: '1px solid green' }}>
            <div>Name: {c.name}</div>
            <div>Age: {c.age}</div>
            <div>Country: {c.country}</div>
            <div>City: {c.city}</div>
            <div>Apt: {c.apt}</div>
            <Link to={`/calls/${c.id}`}>{c.name} Calls</Link>
          </div>
        ))}
      </div>
    )
  }
}

export default graphql(ALL_CONTACTS_QUERY, { name: 'contacts' })(ContactsList)
