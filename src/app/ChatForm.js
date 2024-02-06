import React from 'react';

const ChatForm = ({ chatInput, setChatInput, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>        
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