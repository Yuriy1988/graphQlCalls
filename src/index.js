import ApolloClient from "apollo-client";
import HttpLink from "apollo-link-http";
import InMemoryCache from "apollo-cache-inmemory";
import gql from 'graphql-tag';

export const ALL_CONTACTS_QUERY = gql`
  query Contacts {
    allContacts {
      id
      name
      age
      country
      city
      apt
      executedCalls {
        id
        started
        finished
        caller {
          name
        }
        recipient {
          name
        }
      }
      recievedCalls {
        id
        started
        finished
        caller {
          name
        }
        recipient {
          name
        }
      }
    }
    _allContactsMeta {
      count
    }
    _allCallsMeta {
      count
    }
  }
`;


const uri = 'https://api.graph.cool/simple/v1/cj6dmo8bm39lt0121yi49cl6a';

const client = new ApolloClient({
  link: new HttpLink({ uri }),
  cache: new InMemoryCache(),
});
const test = client.query({ query: ALL_CONTACTS_QUERY });

