import {
  collection,
  getDoc,
  query,
  where,
  onSnapshot,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import React, { useRef, useEffect, useState, Fragment } from "react";
import { Box, TextField, Button, ButtonGroup, Typography } from "@mui/material";


export const SearchUser = () => {

  const initialValues = {
    email: "",
  };
  const formRef = useRef(initialValues);

  const [email, setEmail] = useState(initialValues);
  const isMounted = useRef();


  useEffect(() => {
    if (isMounted.current) {
      return;
    }

    isMounted.current = true;
  }, []);

  return (
    <Fragment>
      <Box
        className="search-user-container"
        component="form"
        ref={formRef}
        onChange={setEmail((e) => e.target.value)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h6"
          sx={{ fontWeight: "bold", fontFamily: "Garamond" }}
        >
          Search User
        </Typography>

        <TextField name="search" label="Search" fullWidth />

        <ButtonGroup>
          <Button
            appearance="primary"
            variant="contained"
           
          >
            Submit
          </Button>
        </ButtonGroup>
      </Box>
    </Fragment>
  );
};

export default SearchUser;
