import React from 'react';
import "./globals.css";

const MessagesDisplay = ({ messages }) => {
  return (
    <div className='messagesDisplay'>
        {messages.map((message) => (
            <div className="sample-box-01">
              {message}
            </div>
        ))}
    </div>
  );
};

export default MessagesDisplay;