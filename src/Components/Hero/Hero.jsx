import React, { useState } from 'react';
import './Hero.css';
import dark_arrow from '../../assets/dark-arrow.png';
import successIcon from '../../assets/icon-success.svg';
import Newsletter from '../../Components/Newsletter/Newsletter';

const Hero = () => {
  const [subscription, setSubscription] = useState(false);
  const [input, setInput] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");

  // Toggle feedback
  const toggleSubscription = () => {
    console.log("toggleSubscription called");
    setSubscription(!subscription);
  };

  console.log("Input state in Hero:", input); // Debugging log
  console.log("Submitted email state in Hero:", submittedEmail);

  if (subscription === true) {
    return (
      <div className="hero container">
        <div className="hero-text feedback-card">
          <img src={successIcon} alt="success icon" />
          <h2>Thanks for subscribing, <span className="submitted-email">{submittedEmail}</span>!</h2>
          <p>
            Get ready to embark on a delicious journey with the best restaurant recommendations straight to your inbox!
          </p>
          <button type="button" onClick={toggleSubscription}>
            Dismiss
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Your Weekly AI-Boosted</h1>
        <h1>Restaurant Guide, <span className='nomi'>Nomi</span></h1>
        <p>Set Off on a Tasty Adventure: Let AI Guide You to Delicious New Eats Every Week!</p>
        <Newsletter
          toggleSubscription={toggleSubscription}
          input={input}
          setInput={setInput}
          setSubmittedEmail={setSubmittedEmail}
        />
      </div>
    </div>
  );
}

export default Hero;
