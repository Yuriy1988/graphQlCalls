import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Countries from './Countries/Countries';
import Country from './Country/Country';
import Test from './Countries/WithSelector';

class App extends Component {
  render() {
    return (
      <div className='center w85'>
        <div className='ph3 pv1 background-gray'>
          <Switch>
            <Route exact path='/test' component={Test} />
            <Route exact path='/countries' component={Countries} />
            <Route exact path='/countries/:id' component={Country} />
            <Route exact path='/' render={() => <Redirect to='/countries' />} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
