import React, { useState, useRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { Box, TextField, Button } from "@mui/material";
import { authInstance,db,useAuth } from "../../firebase";
const ResetPassword = ({ title }) => {
  const [ email, setEmail ] = useState("");
  const { user, userDoc } = useAuth();
  return (
    <React.Fragment>
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
    </React.Fragment>
  );
};

export default ResetPassword;
