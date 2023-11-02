import React from "react";
import "../App.css"; // assuming you place the CSS in a separate file

function ChatbotForm({ onNext }) {
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission
    onNext(); // Trigger the onNext function
  };

  return (
    <div className="container">
      <div className="avatar">
        <img src="path_to_default_avatar.png" alt="User Avatar" />
        <div className="avatar-overlay">
          <img src="path_to_plus_icon.png" alt="Add Icon" />
        </div>
      </div>
      <h2>Hello, let's start</h2>
      <form onSubmit={handleSubmit} id="user-details-form">
        <div className="input-group">
          <label htmlFor="full-name">Full name *</label>
          <input type="text" id="full-name" placeholder="Vivek Sharma" />
        </div>
        <div className="input-group">
          <label htmlFor="job-title">Job title</label>
          <input type="text" id="job-title" placeholder="Product Expert" />
        </div>
        <div className="input-group">
          <label htmlFor="company-website">Company website *</label>
          <input
            type="url"
            id="company-website"
            placeholder="github.com/viveks-practice"
          />
        </div>
        <div className="input-group">
          <label htmlFor="language">Language</label>
          <select id="language">
            <option value="english" selected>
              English
            </option>
            {/* Add other languages as needed */}
          </select>
        </div>
        <div className="input-group">
          <label htmlFor="phone-number">Phone number</label>
          <input type="tel" id="phone-number" placeholder="e.g. 999-9999-999" />
        </div>
        <div className="form-footer">
          <span>1/3</span>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default ChatbotForm;
