import React, { Component } from 'react';
import Header from './Header'
import { Switch, Route, Redirect } from 'react-router-dom'
import Contacts from './Contacts/Contacts';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <Header />
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/' render={() => <Redirect to='/contacts' />} />
            <Route exact path='/contacts' component={Contacts} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
