import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { Link } from 'react-router-dom'
import Test from './WithSelector';
import { ALL_CONTACTS_QUERY } from './query';

class ContactsList extends Component {
  state = {
    name: {}
  };

  handleChange(id, e) {
    this.setState({ name: {
      ...this.state.name,
      [id]: e.target.value,
    }});
  }

  mutate(id, name) {
    this.props.mutate({
      variables: { id, name: name[id] }
    });
  }

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
        <Test/>
        total contacts: {this.props.contacts._allContactsMeta.count}
        {contacts.map((c) => (
          <div key={c.id} style={{ border: '1px solid green' }}>
            <div>Name: {c.name}</div>
            <div>Age: {c.age}</div>
            <div>Country: {c.country}</div>
            <div>City: {c.city}</div>
            <div>Apt: {c.apt}</div>
            <Link to={`/calls/${c.id}`}>{c.name} Calls</Link>
            <div>
              <input type="text" value={this.state.name[c.id] || ''} onChange={this.handleChange.bind(this, c.id)} />
              <button onClick={this.mutate.bind(this, c.id, this.state.name)}>Change Name</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const changeName = gql`
  mutation update($id: ID!, $name: String!) {
    updateContact(id:$id, name:$name) {
      id
      createdAt
      name
    }
  }
`;

export default graphql(changeName)(graphql(ALL_CONTACTS_QUERY, { name: 'contacts' })(ContactsList))
