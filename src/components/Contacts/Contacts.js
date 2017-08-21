import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { ALL_CONTACTS_QUERY } from './query';
import Calls from '../Calls/Calls';

class ContactsList extends Component {
  state = {
    callId: null
  };

  fetchCalls = (callId) => {
    this.setState({ callId })
  };

  handleClick = () => {
    this.props.history.push(`/test`)
  };

  render() {
    if (this.props.contacts && this.props.contacts.loading) {
      return <div>Loading</div>
    }

    if (this.props.contacts && this.props.contacts.error) {
      return <div>Error</div>
    }

    const contacts = this.props.contacts.allContacts;
    return (
      <div>
        <button onClick={this.handleClick}>Test</button>
        total contacts: {this.props.contacts._allContactsMeta.count}
        {contacts.map((c) => (
          <div key={c.id} style={{ border: '1px solid green' }}>
            <div>Name: {c.name}</div>
            <div>Age: {c.age}</div>
            <div>Country: {c.country}</div>
            <div>City: {c.city}</div>
            <div>Apt: {c.apt}</div>
            <button onClick={this.fetchCalls.bind(this, c.id)}>Fetch calls</button>
          </div>
        ))}
        {this.state.callId && <Calls callid={this.state.callId} />}
      </div>
    )
  }
}

export default graphql(ALL_CONTACTS_QUERY, { name: 'contacts' })(ContactsList)
