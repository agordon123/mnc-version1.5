import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import {
  Typography,
  ButtonGroup,
  TextareaAutosize,
  TextField,
} from "@mui/material";
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(196 196 196)" : "rgb(196 196 196)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ProfileChange = React.forwardRef((props, ref) => {
  const { user } = props;
  return (
    <Box
      component="form"
      ref={ref}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        border: 1,
        borderColor: "gray",
        borderRadius: "5px",
        width: 600,
        backgroundColor:"gray"
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <Typography
      variant="h4"
       sx={{
      fontFamily: "Garamond",
      alignItems: "center",
      justifyContent: "center",
      fontSize:"40px",
      color:"white"}}>
      Edit User Info
      </Typography>                
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue=" Username:"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
        <TextField
          id="outlined-password-input"
          label="Current Password"
          type="password"
          autoComplete="current-password"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
        <TextField
          id="outlined-password-input"
          label=" New Password"
          type="password"
          autoComplete="new-password"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue=" Email:"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
        <TextField
          id="outlined-password-input"
          label=" Current Phone Number"
          type="phone-number"
          autoComplete="phone-number"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
        <TextField
          id="outlined-password-input"
          label=" New Phone Number"
          type="phone-number"
          autoComplete="phone-number"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
      </div>
      <div>
        <TextField
          disabled
          id="outlined-disabled"
          label="UserID Change Disabled"
          defaultValue=""
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Role Change Disabled"
          defaultValue=" User"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
         <Button variant="contained" sx={{bottom:-29, right:-10}}>
          Submit
         </Button>
      </div>
    </Box>
  );
});
