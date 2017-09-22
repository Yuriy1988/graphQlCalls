import React, { Component } from 'react'
import { withApollo } from 'react-apollo';
import { ALL_COUNTRIES_QUERY } from './query';

class WithSelector extends Component {
  render() {
    //use gql schema to read from apollo cache
    const { countries } = this.props.client.readQuery({ query: ALL_COUNTRIES_QUERY });

    return (
      <div>
        {countries[0].name}
      </div>
    )
  }
}

export default withApollo(WithSelector);

