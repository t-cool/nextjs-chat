import React from 'react';

const MessagesDisplay = ({ messages }) => {
  return (
    <ul>
      {messages.map((message, index) => (
        <li key={index}>{message}</li>
      ))}
    </ul>
  );
};

export default MessagesDisplay;