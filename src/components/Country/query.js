import gql from 'graphql-tag';

export const COUNTRY_QUERY = gql`
  query countries($id: ID!) {
    countries(id: $id) {
      id
      name
      languages {
        id
      }
    }
  }
`;
