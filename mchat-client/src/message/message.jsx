import React from 'react';

const Message = ({ message }) => {
  const { text, sender } = message;

  return (
    <div className={`message ${sender === 'user' ? 'user-message' : 'other-message'}`}>
      <strong>{sender === 'user' ? 'You' : 'Friend'}</strong>: {text}
    </div>
  );
};

export default Message;