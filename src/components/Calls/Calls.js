import React, { Component } from 'react';
import {graphql} from 'react-apollo';
import { CONTACT_CALLS_QUERY } from './query';

class Calls extends Component {
  render() {
    const { calls } = this.props;

    if (calls && calls.loading) {
      return <div>Loading</div>
    }

    if (calls && calls.error) {
      return <div>Error</div>
    }

    return (
      <div>
        <div>
          <div>Executed calls: {calls.Contact._executedCallsMeta.count}</div>
          <div>
            <div>
              {calls.Contact.recievedCalls.map(c => {
                return (
                  <div key={c.id} style={{ border: '1px solid' }}>
                    <div> started: {c.started}</div>
                    <div> finished: {c.finished} </div>
                    <div> Caller: {c.caller.name} </div>
                    <div> Recipient: {c.recipient.name} </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div>
          <div>Received calls: {calls.Contact._recievedCallsMeta.count}</div>
          <div>
            <div>
              {calls.Contact.recievedCalls.map(c => {
                return (
                  <div key={c.id} style={{ border: '1px solid' }}>
                    <div> started: {c.started}</div>
                    <div> finished: {c.finished} </div>
                    <div> Caller: {c.caller.name} </div>
                    <div> Recipient: {c.recipient.name} </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default graphql(CONTACT_CALLS_QUERY, {
    name: 'calls',
    options: (props) => ({ variables: { id: props.match.params.id }, notifyOnNetworkStatusChange: true }),
})(Calls);


