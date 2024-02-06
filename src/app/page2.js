"use client"

import React, { useState } from 'react';

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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="chatInput">{chatInputLabel}:</label>
          <input
            type="text"
            id="chatInput"
            name="chatInput"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button type="submit">送信</button>
        </div>
      </form>
    </>
  );
};

export default UserForm;
