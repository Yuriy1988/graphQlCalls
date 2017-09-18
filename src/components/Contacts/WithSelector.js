import React, { Component } from 'react'
import { withApollo } from 'react-apollo';
import { ALL_CONTACTS_QUERY } from './query';

class WithSelector extends Component {
  render() {
    //use gql schema to read from apollo cache
    const { allContacts } = this.props.client.readQuery({ query: ALL_CONTACTS_QUERY });

    return (
      <div>
        {allContacts[0].name}
      </div>
    )
  }
}

export default withApollo(WithSelector);

