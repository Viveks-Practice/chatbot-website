import React from "react";

function ChatWidgetPreview({ values }) {
  return (
    <div className="chat-preview">
      <div className="chat-header">{values.topBarMessage}</div>
      <div className="chat-body">
        <p>{values.welcomeMessage}</p>
        {/* Mock chat messages */}
      </div>
    </div>
  );
}

export default ChatWidgetPreview;
