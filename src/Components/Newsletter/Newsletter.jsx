import axios from "axios";
import { useState } from "react";
import './Newsletter.scss';

const Newsletter = ({ toggleSubscription, input, setInput, setSubmittedEmail }) => {
  const [validate, setValidate] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    console.log("handleChange called");
    setInput(event.target.value);
    setValidate(true); // Reset validation state on input change
    setError(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("handleSubmit called"); // Debugging log

    // Negative validation
    if (!input.includes("@")) {
      console.log("Invalid email format");
      setValidate(false);
      return;
    }

    let formdata = new FormData();
    formdata.append('email', input);

    const config = {
      headers: { 'content-type': 'multipart/form-data' }
    }

    axios.post("https://restaurant-ai-newsletter-6b3aef72136c.herokuapp.com/subscriber/subscription", formdata, config)
      .then(response => {
        console.log("Success:", response.data);
        console.log("Email input after success:", input); // Debugging log
        setSubmittedEmail(input);
        setInput(''); // Clear the input field
        // Positive validation
        setValidate(true);
        setError(null);
        // Show feedback card
        toggleSubscription(true);
      })
      .catch(err => {
        console.error("Error object:", err);

        // Check if err is an instance of Error with a message
        if (err.response && err.response.data && err.response.data.message) {
          setError(err.response.data.message);
        } else if (err instanceof Error && err.message) {
          setError(err.message);
        } else {
          setError("Network error. Please try again later.");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="input-group-wrapper">
          <div className="input-group">
            <input
              className={validate ? "valid" : "valid invalid"}
              type="email"
              value={input}
              name="email"
              id="email"
              placeholder="Enter Your Email"
              onChange={handleChange}
            />
            <button type="submit">Join Free!</button>
          </div>
          {!validate && <p className="validation-text">Valid email required</p>}
          {error && <p className="error-text">{error}</p>}
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
