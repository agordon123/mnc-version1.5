import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from "react-router-dom";
import { Stack } from "@mui/material";
import {
  Typography,
  ButtonGroup,
  TextareaAutosize,
} from "@mui/material";



export const PortfolioChange = React.forwardRef((props, ref) => {
  
  const { user } = props;
  return (
    <Box
      component="form"
      ref={ref}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        border: 1,
        borderColor: "gray", borderRadius: "5px", 
        width:400,
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
        fontSize:"40px"}}>
       Edit Portfolio Info
      </Typography>
        <TextField
          id="outlined-number"
          label=" Portfolio Min:"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
        <TextField
          id="outlined-number"
          label=" Portfolio Max:"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
      </div>
    </Box>
  );
});
