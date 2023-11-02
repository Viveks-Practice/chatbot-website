import React, { useState } from "react";
import ChatWidgetCustomization from "./ChatWidgetCustomization";
import ChatWidgetPreview from "./ChatWidgetPreview";

function ChatWidgetBuilding() {
  const [values, setValues] = useState({
    topBarMessage: "",
    welcomeMessage: "",
    // ... other values
  });

  const onInputChange = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="app-container">
      <ChatWidgetCustomization values={values} onInputChange={onInputChange} />
      <ChatWidgetPreview values={values} />
    </div>
  );
}

export default ChatWidgetBuilding;
