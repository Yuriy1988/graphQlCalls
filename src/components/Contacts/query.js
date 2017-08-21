import {gql} from 'react-apollo';

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

export const CONTACT_CALLS_QUERY = gql`
  query Contact($id: ID!) {
    Contact(id: $id) {
      executedCalls{
        started
        finished
        caller {
          name
        }
        recipient {
          name
        }
      }
      _executedCallsMeta {
        count
      }
      recievedCalls{
        started
        finished
        caller {
          name
        }
        recipient {
          name
        }
      }
      _recievedCallsMeta {
        count
      }
    }
  }
`;
