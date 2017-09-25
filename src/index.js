import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { GC_AUTH_TOKEN } from './constants'
import DevTools from './dev-tools';
import configureStore from './configure-store';
import './styles/index.css';
import ApolloClient from "apollo-client";
import HttpLink from "apollo-link-http";
import SetContextLink from 'apollo-link-set-context';
import {ApolloLink} from 'apollo-link'
import Cache from "apollo-cache-inmemory";
import { ApolloProvider } from 'react-apollo'

const uri = 'http://10.28.12.193:8100/graphql';

const setContext = (context) => {
  return {
    headers: {
      ...context.headers,
      auth: GC_AUTH_TOKEN,
    },
  }
};

const link = ApolloLink.from([
  new SetContextLink(setContext),
  new HttpLink({ uri }),
]);

const client = new ApolloClient({
  link,
  cache: new Cache().restore(window.__APOLLO_STATE__ || {}),
});

client.initStore = () => {};

const store = configureStore();

window.client = client;

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider store={store} client={client}>
      <div>
        <App />
        <DevTools />
      </div>
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
registerServiceWorker();

