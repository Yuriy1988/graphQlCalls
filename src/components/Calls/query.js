import {gql} from 'react-apollo';

export const CONTACT_CALLS_QUERY = gql`
  query Contact($id: ID!) {
    Contact(id: $id) {
      executedCalls{
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
      _executedCallsMeta {
        count
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
      _recievedCallsMeta {
        count
      }
    }
  }
`;
