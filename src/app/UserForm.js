"use client"

import React, { useState } from 'react';
import ChatForm from './ChatForm';

const UserForm = () => {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, chatInput]);
    setChatInput('');
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <br />
      <ChatForm 
        chatInput={chatInput} 
        setChatInput={setChatInput} 
        handleSubmit={handleSubmit} 
      />
    </div>
  );
};

export default UserForm;