import TextField from "@mui/material/TextField";
import { ProfileButton } from "../../components/Buttons";
import { Box, Button, Typography } from "@mui/material";
import { auth } from "../../firebase";
import { useAuthState, useUpdateEmail } from "react-firebase-hooks/auth";
import { query, getDoc } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import {
  sendPasswordResetEmail,
  verifyPasswordResetCode,
  confirmPasswordReset,
  updateProfile,
  updatePassword,
  reauthenticateWithCredential,
  signInWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

export const ChangePassword = () => {
  //const [useUpdatePassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const handlePWChange = async (e) => {
    e.preventDefault();
    if (newPassword === confirmPassword) {
      try {
        const user = localStorage.getItem("authToken");
        const credential = EmailAuthProvider.credential(user, oldPassword);

        await reauthenticateWithCredential(user, credential).then(() => {
          if (newPassword === confirmPassword) {
            updatePassword(user, newPassword);
          }
        });
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <React.Fragment>
      <Box
        className="account-password-container"
        component="form"
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h4">Change Password</Typography>
        <TextField
          name="oldPassword"
          onChange={(e) => setOldPassword(e.target.value)}
        />
        <TextField
          name="newPassword"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <TextField
          name="confirmNewPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button onClick={handlePWChange}>Change Password</Button>
        <ProfileButton>Change</ProfileButton>
      </Box>
    </React.Fragment>
  );
};

export default ChangePassword;
