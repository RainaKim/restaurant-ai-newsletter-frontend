import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import successIcon from '../../assets/icon-success.svg'
import Newsletter from '../../Components/Newsletter/Newsletter'
import { useState } from "react";

const Hero = () => {
  const [subscription, setSubscription] = useState(false);
  const [input, setInput] = useState("");

  // Toggle feedback
  const toggleSubscription = () => {
    setSubscription(!subscription);
  };

  if (subscription === true) {
    return (
      <div className="feedback-card">
        <img src={successIcon} alt="success icon" />
        <h2>Thanks for subscribing!</h2>
        <p>
          A confirmation email has been sent to <span>{input}</span>. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button type="button" onClick={toggleSubscription}>
          Dismiss message
        </button>
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
            />
            {/* <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button> */}
        </div>
    </div> 
  )
}

export default Hero