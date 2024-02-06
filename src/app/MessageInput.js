import React from 'react';

const MessageInput = ({ chatInput, setChatInput, handleSubmit }) => {
  return (
    <div className="messageInput">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="chatInput"
            name="chatInput"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
          />
          <button type="submit">送信</button>
      </form>
    </div>
  );
};

export default MessageInput;