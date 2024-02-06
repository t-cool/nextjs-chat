"use client"

import React, { useState } from 'react';

// メッセージ表示
import MessagesDisplay from './MessagesDisplay';

// メッセージ入力
import MessageInput from './MessageInput';

const ChatInterface = () => {
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessages([...messages, chatInput]);
    setChatInput('');
  };

  return (
    <div className="chatWrapper">
      <MessagesDisplay messages={messages} />
      <MessageInput 
        chatInput={chatInput} 
        setChatInput={setChatInput} 
        handleSubmit={handleSubmit} 
      />
    </div>
  );
};

export default ChatInterface;