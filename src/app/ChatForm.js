import React from 'react';

const ChatForm = ({ chatInputLabel, chatInput, setChatInput, handleSubmit }) => {
  return (
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
  );
};

export default ChatForm;