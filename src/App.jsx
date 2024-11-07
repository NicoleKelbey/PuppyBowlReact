import './App.css'
import SignUpForm from "./Components/SignUpForm.jsx";
import Authenticate from "./Components/Authenticate.jsx";
import { useState } from 'react';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken} />
      
    </>
  )
}

export default App