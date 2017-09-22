import React, { Component } from 'react';
import { graphql, gql } from 'react-apollo';
import { Link } from 'react-router-dom'
import Test from './WithSelector';
import { ALL_COUNTRIES_QUERY } from './query';

class CountriesList extends Component {
  state = {
    name: {}
  };

  handleChange(id, e) {
    this.setState({ name: {
      ...this.state.name,
      [id]: e.target.value,
    }});
  }

  mutate(id, name) {
    this.props.mutate({
      variables: { id, name: name[id] }
    });
  }

  changeRoute() {
    this.props.history.push('/test');
  }

  render() {
    if (this.props.countries && this.props.countries.loading) {
      return <div>Loading</div>
    }

    if (this.props.countries && this.props.countries.error) {
      return <div>Error</div>
    }

    const { countries } = this.props.countries;
    return (
      <div>
        <Test/>
        total countries: {this.props.countries.length}
        {countries.map((c) => (
          <div key={c.id} style={{ border: '1px solid green' }}>
            <div>Name: {c.name}</div>
            <div>Age: {c.age}</div>
            <div>Country: {c.country}</div>
            <div>City: {c.city}</div>
            <div>Apt: {c.apt}</div>
            <Link to={`/calls/${c.id}`}>{c.name} Calls</Link>
            <div>
              <input type="text" value={this.state.name[c.id] || ''} onChange={this.handleChange.bind(this, c.id)} />
              <button onClick={this.mutate.bind(this, c.id, this.state.name)}>Change Name</button>
              <button onClick={() => { this.changeRoute() }}>Click me</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

const changeName = gql`
  mutation updateCountry($id: ID!, $name: String!) {
    updateCountry(id: $id, countryDef: {name: $name, languages: [1, 2, 3]}) {
      id
      name
      languages {
        id
        name
      }
    }
  }
`;

export default graphql(changeName)(graphql(ALL_COUNTRIES_QUERY, { name: 'countries' })(CountriesList))
