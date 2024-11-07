import { useState } from "react";
const SignUpForm = ({ setToken }) => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/signup`, {
        method: "POST",
        headers: {
          "Content-Type" : "application/json"
        },
        body: JSON.stringify({userName, password})
          
        });
      const result = await response.json();
      setToken(result.token);
    } catch (error) {
      setError(error.message)
    }
  };
  return (
    <>
      <h2>Sign Up!</h2>
      {
        error && <p>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={userName}
          onChange={(event) => setUserName(event.target.value)} required/>
        <input
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}required/>
        <button>Submit!</button>
      </form>
    </>
  )
};

export default SignUpForm