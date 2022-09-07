import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";

import { Box, Typography, TextField, Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { useAuth } from "reactfire";
export const SignOutBox = () => {
  const { status, data: user } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      signOut();
    } catch (error) {}
  };
  const getUser = () => {
    if (user) {
    }
  };
  useEffect(() => {}, []);
  return (
    <Box
      component="div"
      sx={{
        width: "100%",
        position: "relative",
        textAlign: "left",
        backgroundColor: "#eeeeee",
        color: "rgb(128, 128, 128)",
        fontSize: "20px",
      }}
      className="SignOutBox"
    >
      <Typography variant="h4">Sign Out</Typography>

      <Typography variant="body1">
        Signing out? You can always log back in
      </Typography>

      <Button onClick={handleSignOut}>Sign Out</Button>
    </Box>
  );
};

export default SignOutBox;
