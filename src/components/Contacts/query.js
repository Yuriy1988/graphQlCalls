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