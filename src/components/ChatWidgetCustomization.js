import React from "react";

function ChatWidgetCustomization({ values, onInputChange }) {
  return (
    <div>
      <h2>Customize your chat widget</h2>
      <form>
        <input
          type="text"
          placeholder="Top bar message"
          value={values.topBarMessage}
          onChange={(e) => onInputChange("topBarMessage", e.target.value)}
        />
        <input
          type="text"
          placeholder="Welcome message"
          value={values.welcomeMessage}
          onChange={(e) => onInputChange("welcomeMessage", e.target.value)}
        />
        {/* Add other inputs */}
      </form>
    </div>
  );
}

export default ChatWidgetCustomization;
