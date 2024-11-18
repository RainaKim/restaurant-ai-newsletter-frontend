import React from 'react';
import './UnsubscribeConfirmation.css';

const UnsubscribeConfirmation = () => {
  return (
    <div className="page-background"> {/* Wrap the content in this div */}
      <div className="confirmation-container">
        <h1>You've Been Unsubscribed</h1>
        <p>We're sorry to see you go. You have successfully unsubscribed from our newsletter.</p>
        <a href="/" className="btn">Return to Homepage</a>
      </div>
    </div>
  );
};

export default UnsubscribeConfirmation;
