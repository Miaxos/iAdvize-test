import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MessageContainer from './components/MessageContainer';
import { sendMessage } from './actions';
import MessageFilter from './utils';
import './App.scss';


class App extends Component {
  static propTypes = {
    messages: PropTypes.instanceOf(Array).isRequired,
    send: PropTypes.instanceOf(Function).isRequired,
  }


  render() {
    const { messages, send } = this.props;
    return (
      <div className="App">
        <div className="app-center">
          <MessageContainer
            name="Bruce"
            messages={MessageFilter(messages, 'Bruce')}
            send={content => send({ to: 'Willis', from: 'Bruce', content })}
          />
          <MessageContainer
            name="Willis"
            messages={MessageFilter(messages, 'Willis')}
            send={content => send({ to: 'Bruce', from: 'Willis', content })}
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

const mapDispatchToProps = { send: sendMessage };

export default connect(mapStateToProps, mapDispatchToProps)(App);
