import React from 'react';
import "./globals.css";

const MessagesDisplay = ({ messages }) => {
  return (
    <div className='messagesDisplay'>
        <ul>
        {messages.map((message, index) => (
            <li key={index}>{message}</li>
        ))}
        </ul>
    </div>
  );
};

export default MessagesDisplay;