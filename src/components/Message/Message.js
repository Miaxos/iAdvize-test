import React from 'react';
import PropTypes from 'prop-types';
import './Message.scss';

function Message({ message, name }) {
  const customClass = (name === message.from ? 'from-me' : 'from-them');
  return (
    <div className="message">
      <div className={`message-content ${customClass}`}>
        <p>{message.content}</p>
      </div>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.instanceOf(Object).isRequired,
  name: PropTypes.string.isRequired,
};

export default Message;
