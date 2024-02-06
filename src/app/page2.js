"use client"

import React, { useState } from 'react';
import ChatForm from './ChatForm'; // ChatForm コンポーネントをインポート

const UserForm = ({ chatInputLabel }) => {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, chatInput]);
    setChatInput('');
  };

  return (
    <>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <br />
      <ChatForm 
        chatInputLabel={chatInputLabel} 
        chatInput={chatInput} 
        setChatInput={setChatInput} 
        handleSubmit={handleSubmit} 
      />
    </>
  );
};

export default UserForm;