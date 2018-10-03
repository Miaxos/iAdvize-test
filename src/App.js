import React, { Component } from 'react';
import MessageContainer from './components/MessageContainer';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="app-center">
          <MessageContainer name="Bruce" />
          <MessageContainer name="Willis" />
        </div>
      </div>
    );
  }
}

export default App;
