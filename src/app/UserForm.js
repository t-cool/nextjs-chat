"use client"

import React, { useState } from 'react';
import ChatForm from './ChatForm';
import MessagesDisplay from './MessagesDisplay';

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
      <MessagesDisplay messages={messages} />
      <ChatForm 
        chatInput={chatInput} 
        setChatInput={setChatInput} 
        handleSubmit={handleSubmit} 
      />
    </div>
  );
};

export default UserForm;