import React, { useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashboard from "./components/Dashboard";

function App() {
  const [isSignup, setIsSignup] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  if (!currentUser) {
    return isSignup ? (
      <Signup setIsSignup={setIsSignup} />
    ) : (
      <Login setCurrentUser={setCurrentUser} setIsSignup={setIsSignup} />
    );
  }

  return (
    <Dashboard
      currentUser={currentUser}
      setCurrentUser={setCurrentUser}
    />
  );
}

export default App;