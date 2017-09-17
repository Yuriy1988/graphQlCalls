import React, { Component } from 'react'
import { gql, graphql, withApollo } from 'react-apollo';
import { ALL_CONTACTS_QUERY } from './query';

class Test extends Component {
  handleClick = () => {
    this.props.history.push(`/`)
  };

  render() {
    window.a = this.props;
    window.b = ALL_CONTACTS_QUERY
    // console.log(this.props.client.readQuery({ ALL_CONTACTS_QUERY }));
    return (
      <div>
        HI
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

Test.fragments = {
  entry: gql`
    fragment Test on Contact {
      city
      id
    }
  `,
};

export default withApollo(Test);

