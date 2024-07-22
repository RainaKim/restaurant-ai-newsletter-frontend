import axios from "axios";
import { useState } from "react";
import './Newsletter.scss';

const Newsletter = ({ toggleSubscription, input, setInput }) => {
  // const [input, setInput] = useState("");
  const [validate, setValidate] = useState(true);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Negative validation
    if (!input.includes("@")) {
      setValidate(false);
      return;
    }

    let formdata = new FormData();
    formdata.append('email', input);

    const config = {
      headers: {'content-type': 'multipart/form-data'}
    }

    axios.post("https://restaurant-ai-newsletter-6b3aef72136c.herokuapp.com/subscriber/subscription", formdata, config)
    .then(response => {
      setInput(response.data.message)
      // Positive validation
      setValidate(true);
      // Show feedbackcard
      toggleSubscription(true);
    })
    .catch(err => {
      setError(err);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} noValidate>
        <div className="labels">
          {validate || <p>Valid email required</p>}
        </div>
        <input
          className={validate ? "valid" : "valid invalid"}
          type="email"
          value={input}
          name="email"
          id="email"
          placeholder="your_email@nomi.com"
          onChange={handleChange}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;