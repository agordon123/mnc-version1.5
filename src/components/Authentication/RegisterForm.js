import React, { useState, useEffect, useReducer, useRef } from "react";
import { Box, TextField, Button, ButtonGroup, Dialog } from "@mui/material";
import { CustomButton } from "../Misc/Buttons";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useUser } from "reactfire";
export const RegisterForm = ({ title }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const formRef = useRef();
  const {data:user} = useUser();

  const handleSubmit = async(e) =>{
    e.preventDefault();

  }
  const resetPassword = () => {
    navigate("/reset-password");
  };
  const listErrors = (error) => {
    const errors = {};
    Object.keys(error).forEach((key) => {
      errors[key] = error[key].message;
    });
    return errors;
  };
  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  return (
    <div className="register-form">
      <h1> {title} Form</h1>
      <Box
        component="form"
        autoComplete
        noValidate
    
        sx={{
          display: "flex",
          flexDirection: "column",
          marginTop: "20px",
          paddding: "20px",
        }}
      >
        <TextField
          id="email"
          label="Email :"
          variant="outlined"
          autocomplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "whitesmoke",
            fontFamily: "Garamond",
            margin: "5%",
          }}
        />
        <TextField
          id="password"
          label="Password :"
          variant="outlined"
          type="password"
          value={password}
          autoComplete="new-password"
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            backgroundColor: "whitesmoke",
            fontFamily: "Garamond",
            margin: "5%",
          }}
        />
        <TextField
          id="confirmPassword"
          label="Confirm Password :"
          variant="outlined"
          type="password"
          value={confirmPassword}
          autoComplete="new-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            backgroundColor: "whitesmoke",
            fontFamily: "Garamond",
            margin: "5%",
          }}
        />
        <ButtonGroup>
          <CustomButton title={title} type="submit">
            Register
          </CustomButton>
          <Button onClick={resetPassword}>Forgot Password?</Button>
        </ButtonGroup>
      </Box>
    </div>
  );
};

export default RegisterForm;
