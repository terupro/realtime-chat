import React, { useState } from "react";

const Chat = () => {
  const [currentMessage, setCurrentMessage] = useState("");

  const sendMessage = () => {};

  return (
    <div className="chat-window">
      <div className="chat-header">
        <p>ライブチャット</p>
      </div>
      <div className="chat-body"></div>
      <div className="chat-footer">
        <input
          type="text"
          placeholder="メッセージ内容"
          onChange={(e) => setCurrentMessage(e.target.value)}
        />
        <button onClick={sendMessage}>&#9658;</button>
      </div>
    </div>
  );
};

export default Chat;
