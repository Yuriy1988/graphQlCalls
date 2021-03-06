import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Contacts from './Contacts/Contacts';
import Calls from './Calls/Calls';
import Test from './Contacts/WithSelector';

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/test' component={Test} />
            <Route exact path='/' render={() => <Redirect to='/contacts' />} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path='/calls/:id' component={Calls} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
