import { useState } from "react";

const Authenticate = ({ token }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  const [successUserName, setSuccessUserName] = useState(``);
  const [error, setError] = useState(null);
  const handleClick = async () => {
  
    try {
      const response = await fetch(`https://fsa-jwt-practice.herokuapp.com/authenticate`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      }
      );
      const result = await response.json();
      setSuccessMessage(result.message)
      setSuccessUserName(result.username)
    } catch (error) {
      setError(error.message)
    }
  }
  return (
    <>
      <h2>Authenticate</h2>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
            {successMessage ? <p>{successMessage} {successUserName}</p> : null}
        </>
      )}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  )
};

export default Authenticate