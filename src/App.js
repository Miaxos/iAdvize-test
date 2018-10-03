import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageContainer from './components/MessageContainer';
import './App.scss';

class App extends Component {
  static propTypes = {
    messages: PropTypes.instanceOf(Array).isRequired,
  }

  render() {
    const { messages } = this.props;
    return (
      <div className="App">
        <div className="app-center">
          <MessageContainer
            name="Bruce"
            messages={messages.filter(x => x.to === 'Bruce')}
          />
          <MessageContainer
            name="Willis"
            messages={messages.filter(x => x.to === 'Willis')}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => (
  {
    messages: state.messages,
  }
);

export default connect(mapStateToProps)(App);
