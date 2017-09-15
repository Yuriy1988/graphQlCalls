import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo';

class Test extends Component {
  handleClick = () => {
    this.props.history.push(`/`)
  };

  render() {

    return (
      <div>
        HI
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}

export default graphql(gql`
  query Contacts {
    Contact(id: "cj6ggo02rg9mw0156qu8xvmze") {
      id
      name
    }
  }
`)(Test);
