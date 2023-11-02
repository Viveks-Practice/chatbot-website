// App.js

import React, { useState } from "react";
import ChatbotForm from "./components/ChatbotForm";
import ChatWidgetBuilding from "./components/ChatWidgetBuilding";

function App() {
  const [step, setStep] = useState(1);

  return (
    <div className="app-container">
      {step === 1 && <ChatbotForm onNext={() => setStep(2)} />}
      {step === 2 && <ChatWidgetBuilding onNext={() => setStep(3)} />}
      {/* Add further steps as needed */}
    </div>
  );
}

export default App;
