import React, { useState, forwardRef, useRef, useEffect } from "react";
import { Box, Button, TextField } from "@mui/material";
import { Item } from "../Admin/AdminPageComponents";
import { where, getDoc, doc, collection, query } from "firebase/firestore";
import { useFirestore, useFirestoreDocData } from "reactfire";

export const ProfileEdit = (props) => {
  const { user } = props;
  const [isSubmit, setIsSubmit] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    userName: "",
    role: "",
    min: "",
    max: "",
  });
  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const docRef = doc(useFirestore(), "users", props.user.uid);
  const { status, data } = useFirestoreDocData(docRef);

  return (
    <Box
      className="account-page-portfolio"
      component="form"
      ref={formRef}
      sx={{ width: "70%", alignItems: "center", justifyContent: "center" }}
    >
      <Item>
        <TextField
          label="Role"
          value={formValue.role}
          disabled
          sx={{ fontFamily: "Garamond" }}
          fullWidth
        />
      </Item>
    </Box>
  );
};

export default ProfileEdit;
