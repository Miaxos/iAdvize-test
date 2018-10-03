import React from 'react';
import PropTypes from 'prop-types';

function Message({ content }) {
  return (
    <div className="message from-me">
      <p>{content}</p>
    </div>
  );
}

Message.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Message;
