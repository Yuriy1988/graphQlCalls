import React from 'react';
import gql from 'graphql-tag';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider, createNetworkInterface, ApolloClient } from 'react-apollo'
import { Provider } from 'react-redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { GC_AUTH_TOKEN } from './constants'
import DevTools from './dev-tools';
import configureStore from './configure-store';
import { mockServer, MockList, makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { mockNetworkInterfaceWithSchema } from 'apollo-test-utils';
import './styles/index.css';
import MSchema from './schema';

const store = configureStore();


const schema = makeExecutableSchema({ typeDefs: MSchema });
addMockFunctionsToSchema({ schema });

addMockFunctionsToSchema({ schema });

const mockNetworkInterface = mockNetworkInterfaceWithSchema({ schema });

// networkInterface.use([{
//   applyMiddleware(req, next) {
//     if (!req.options.headers) {
//       req.options.headers = {}
//     }
//     const token = localStorage.getItem(GC_AUTH_TOKEN);
//     req.options.headers.authorization = token ? `Bearer ${token}` : null;
//     next();
//   }
// }]);

const client = new ApolloClient({
  networkInterface: mockNetworkInterface,
});


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

