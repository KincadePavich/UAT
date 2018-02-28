import React, { Component } from 'react';
import { Route } from 'react-router';

import Settings from './screens/Settings.js';

class Routes extends Component {
  render() {
    return (
      <Route component={Settings} path='/settings' />
    );
  }
}

export default Routes;
