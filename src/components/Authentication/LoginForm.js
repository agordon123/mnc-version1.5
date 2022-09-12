/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext, useReducer } from "react";
import { Box, TextField, FormControlLabel, Checkbox } from "@mui/material";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { CustomButton } from "../../components/Misc/Buttons";
import { useNavigate } from "react-router-dom";
import { ButtonGroup, Button } from "@mui/material";
import { Footer } from "../Misc/Footer";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";


//import { useAuth } from "../../Context/AuthContext";
export const LoginForm = ({ title }) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleNavigate = () => {
    navigate("/register");
  };

  useEffect(() => {}, []);
  return (
    <div className="login-form">
      <h1>{title} Form</h1>
      <Box
        className="login-form-box"
        component="form"
        autoComplete="true"
        noValidate
   
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          paddding: "20px",
        }}
      >
        <TextField
          className="form-text-field"
          id="email"
          label="Email :"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="email"
          autoFocus
          fullWidth={true}
          required
          margin="normal"
          value={email}
        />
        <TextField
          id="password"
          label="Password :"
          variant="outlined"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          fullWidth={true}
          required
          margin="normal"
          type="password"
          value={password}
        />
        <ButtonGroup sx={{ m: 5, alignItems: "center" }}>
          <Button
            key="Login"
            variant="contained"
            type="submit"
            sx={{ backgroundColor: "gray" }}
          >
            Login
          </Button>
          <Button key="Register" onClick={handleNavigate} variant="contained">
            Register
          </Button>
        </ButtonGroup>
      </Box>
      <Footer />
    </div>
  );
};

export default LoginForm;