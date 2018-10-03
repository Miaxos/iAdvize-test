import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import MessageInput from '../MessageInput';
import './MessageContainer.scss';

function MessageContainer({ name, messages = [] }) {
  const messageJX = messages.map(message => (
    <Message
      key={message.id}
      content={message.content}
    />
  ));
  return (
    <div className="message-container">
      <h1>{name}</h1>
      <div className="message-box">
        {messageJX}
      </div>
      <MessageInput />
    </div>
  );
}

MessageContainer.propTypes = {
  name: PropTypes.string.isRequired,
  messages: PropTypes.instanceOf(Array).isRequired,
};

export default MessageContainer;
