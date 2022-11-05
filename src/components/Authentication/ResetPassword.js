import React, { useState, useRef, Fragment } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Box, TextField, Button } from "@mui/material";
import { useAuth,useInitAuth } from "reactfire";
const ResetPassword = ({ title }) => {
  const [ email, setEmail ] = useState("");
  const { user, userDoc } = useAuth();
  return (
    <Fragment>
      <Box
        component="form"
        className="password-reset"
        sx={{
          display: "flex",
          width: "100%",
          flexDirection: "column",
          marginTop: "5%",
          fontFamily: "Garamond",
        }}
      >
        {title}
        <TextField value="email" onChange={(e) => setEmail(e.target.value)} />
        <Button
          variant="contained"
          color="primary"
          onClick={() => sendPasswordResetEmail(email)}
          type="submit"
        />
      </Box>
    </Fragment>
  );
};

export default ResetPassword;
