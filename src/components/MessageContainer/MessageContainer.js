import React from 'react';
import PropTypes from 'prop-types';
import Message from '../Message';
import MessageInput from '../MessageInput';
import './MessageContainer.scss';

function MessageContainer({ name }) {
  return (
    <div className="message-container">
      <h1>{name}</h1>
      <div className="message-box">
        <Message />
      </div>
      <MessageInput />
    </div>
  );
}

MessageContainer.propTypes = {
  name: PropTypes.string.isRequired,
};

export default MessageContainer;
