import React, { Component } from 'react'
import { gql, withApollo } from 'react-apollo';

@withApollo
class Test extends Component {
  handleClick = () => {
    this.props.history.push(`/`)
  };

  render() {
    const { client } = this.props;

    const todo = client.readFragment({
      id: "cj6ggo02rg9mw0156qu8xvmze",
      fragment: gql`
        fragment contact on Contact {
          id
          name,
          age
        }
      `,
    });

    console.log('todo', todo);
    return (
      <div>
        HI
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}
export default Test;

