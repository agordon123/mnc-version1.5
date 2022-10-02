import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from "react-router-dom";
import { Stack, Alert } from "@mui/material";
import {
  Typography,
  ButtonGroup,
  TextareaAutosize,
} from "@mui/material";

import { Spinner } from "react-bootstrap";
import { auth } from "../../firebase";
import {
  where,
  getDoc,
  doc,
  collection,
  query,
  setDoc,
} from "firebase/firestore";
import { useFirestore, useFirestoreDocData, useUser } from "reactfire";

export const PortfolioChange = React.forwardRef((props, ref) => {
  const { data: user } = useUser();
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [formValue, setFormValue] = React.useState({
    min: "",
    max: "",
  });
  const formRef = React.useRef();
  const docRef = doc(useFirestore(), "users", user.uid);
  const { status, data } = useFirestoreDocData(docRef);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    if (isSubmit) {
      setDoc(docRef, ...formValue).then((res) => {
        if (res) {
          return <Alert variant="success">Account Updated</Alert>;
        }
      });
    }
  };
  React.useEffect(() => {
    if (status === "success") {
      setFormValue(...data);
    }
  }, [status, setFormValue, data]);


  return (
    <Box
      component="form"
      ref={formRef}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        border: 1,
        borderColor: "gray", borderRadius: "5px", 
        width: 600,
      }}
      noValidate
      autoComplete="off"
      backgroundColor="#808080"
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
       Edit Portfolio Info
      </Typography>
        <TextField
          id="outlined-number"
          value={formValue.min}
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
          value={formValue.max}
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
      <Button variant="contained" sx={{bottom:0, right:-255}}
      onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
});
