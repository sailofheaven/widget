import React, { Component } from 'react';
import './App.css';

import WidgetPreview from './containers/widget-preview'
import WidgetSettings from './containers/widget-settings'
import WidgetCode from './containers/widget-code';


class App extends Component {

  render() {

    return (
      <div className="App">
        <header className="App-header">
          CRYPTORANK WIDGET
        </header>
        <div className="App-widget">
          <WidgetPreview />
          <WidgetSettings className="App-settings" />
        </div>
        <WidgetCode />
      </div>
    );
  }
}

export default App;
