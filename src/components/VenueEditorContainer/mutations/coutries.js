import gql from 'graphql-tag';

export const CREATE_COUNTRY_MUTATION = gql`
  mutation createCountry($countryDef: countryInput) {
    createCountry(countryDef: $countryDef) {
      name,
      languages {
        id
      }
    }
  }
`;

export const UPDATE_COUNTRY_MUTATION = gql`
  mutation updateCountry($id:Int, $countryDef: countryInput) {
    updateCountry(id:$id, countryDef: $countryDef) {
      id
      name
      languages {
        id
        name
      }
    }
  }
`;

export const DELETE_COUNTRY_MUTATION = gql`
  mutation deleteCountry($id:Int) {
    deleteCountry(id:$id)
  }
`;
