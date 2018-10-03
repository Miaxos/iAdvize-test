import React from 'react';
import PropTypes from 'prop-types';

class MessageInput extends React.Component {
  static propTypes = {
    send: PropTypes.instanceOf(Function).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      message: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  render() {
    const { send } = this.props;
    const { message } = this.state;
    return (
      <div className="message-input">
        <input
          value={message}
          onChange={this.handleChange}
        />
        <button type="button" onClick={() => send(message)}>
          Send
        </button>
      </div>
    );
  }
}


export default MessageInput;
