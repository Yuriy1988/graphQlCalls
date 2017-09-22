import gql from 'graphql-tag';

export const ALL_COUNTRIES_QUERY = gql`
  query countries {
    countries {
      id
      name
      languages {
        id
      }
    }
  }
`;