import React, { Component } from 'react'
import { withApollo } from 'react-apollo';
import { ALL_COUNTRIES_QUERY } from './query';

class WithSelector extends Component {
  state = { countries: []};

  componentDidMount() {
    this.props.client.query({ query: ALL_COUNTRIES_QUERY, name: 'countries' }).then(response => {
      this.setState({ countries: response.data.countries });
    });
  }

  render() {
    return (
      <div>
        {JSON.stringify(this.state.countries)}
      </div>
    )
  }
}

export default withApollo(WithSelector);

