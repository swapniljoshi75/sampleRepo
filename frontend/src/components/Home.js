import React from "react";
import { useAuth } from "../navigation/Provider";

function Home() {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <>
      <h2>Home</h2>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}

export default Home;
