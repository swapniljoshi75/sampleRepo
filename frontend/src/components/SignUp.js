import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box } from "@mui/material";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  
  const handleSignup = () => {
    // Check if username or password is empty
    if (!username || !password) {
      setMessage("Please enter both username and password.");
      return;
    }

    // Check if user already exists
    if (localStorage.getItem(username)) {
      setMessage("User already exists. Please choose a different username.");
      return;
    }

    // Save user to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    navigate("/login");
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
        Signup
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
        onClick={handleSignup}
        fullWidth
        sx={{ mt: 2 }}
      >
        Signup
      </Button>
      <Link to="/login" style={{ marginTop: 10, textDecoration: "none" }}>
        <Typography variant="body2" color="primary">
          Login
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

export default Signup;
