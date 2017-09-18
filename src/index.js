import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { GC_AUTH_TOKEN } from './constants'
import DevTools from './dev-tools';
import configureStore from './configure-store';
import './styles/index.css';

const store = configureStore();
const networkInterface = createNetworkInterface({
    uri: 'https://api.graph.cool/simple/v1/cj6dmo8bm39lt0121yi49cl6a'
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {}
    }
    const token = localStorage.getItem(GC_AUTH_TOKEN);
    req.options.headers.authorization = token ? `Bearer ${token}` : null;
    next();
  }
}]);

const client = new ApolloClient({
  // dataIdFromObject: o => o.id,
  networkInterface,
});

window.client = client;

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <div>
          <App />
          <DevTools />
        </div>
      </ApolloProvider>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root')
);
registerServiceWorker();
