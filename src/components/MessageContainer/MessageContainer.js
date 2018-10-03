import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import MessageInput from '../MessageInput';
import './MessageContainer.scss';

class MessageContainer extends React.Component {
  constructor(props) {
    super(props);
    this.messagesEnd = React.createRef();
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    // eslint-disable-next-line
    // https://stackoverflow.com/questions/37620694/how-to-scroll-to-bottom-in-react
    this.messagesEnd.current.scrollIntoView();
  }

  render() {
    const { name, messages, send } = this.props;
    const messageJX = messages.map(message => (
      <Message
        key={message.id}
        message={message}
        name={name}
      />
    ));
    return (
      <div className="message-container">
        <h1>{name}</h1>
        <div className="message-box">
          {messageJX}
          <div
            style={{ float: 'left', clear: 'both' }}
            ref={this.messagesEnd}
          />
        </div>
        <MessageInput
          send={send}
        />
      </div>
    );
  }
}

MessageContainer.propTypes = {
  name: PropTypes.string.isRequired,
  messages: PropTypes.instanceOf(Array).isRequired,
  send: PropTypes.instanceOf(Function).isRequired,
};

export default MessageContainer;
