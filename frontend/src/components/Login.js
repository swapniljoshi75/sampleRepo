import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../navigation/Provider";
import { TextField, Button, Typography, Box } from "@mui/material";

const Login = () => {
  const { login, logout } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    // Check if username or password is empty
    if (!username || !password) {
      setMessage("Please enter both username and password.");
      return;
    }

    // Check if user exists
    const storedUser = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (!storedUser) {
      setMessage("User not found. Please check your username.");
      return;
    }

    // Check if password is correct
    if (storedPassword !== password) {
      setMessage("Incorrect password. Please try again.");
      return;
    }

    // Login successful
    login();
  };

  return (
    <Box
      sx={{
        width: 300,
        margin: "auto",
        marginTop: 5,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleLogin}
        fullWidth
        sx={{ mt: 2 }}
      >
        Login
      </Button>
      <Link to="/signup" style={{ marginTop: 10, textDecoration: "none" }}>
        <Typography variant="body2" color="primary">
          SignUp
        </Typography>
      </Link>
      {message && (
        <Typography variant="body2" color="error" sx={{ mt: 2 }}>
          {message}
        </Typography>
      )}
    </Box>
  );
};

export default Login;
