import React from 'react';
import { Provider } from 'react-redux';

import Navigation from './Navigation/Navigation';
import Store from './Store/configStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store = {Store}>
         <Navigation />
      </Provider>
     
    );
  }
}

