import React from 'react';
import PropTypes from 'prop-types';
import './MessageInput.scss';

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
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleClick() {
    const { message } = this.state;
    const { send } = this.props;
    send(message);
    this.setState({ message: '' });
  }

  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  }

  render() {
    const { message } = this.state;
    return (
      <div className="message-input">
        <input
          value={message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <button type="button" onClick={this.handleClick}>
          Send
        </button>
      </div>
    );
  }
}


export default MessageInput;
