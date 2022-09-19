import React from "react";
import { useFirestore, useFirestoreCollection } from "reactfire";
import { collection, orderBy, query } from "firebase/firestore";
import { Box } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";

export const ManageUsers = () => {
  const firestore = useFirestore();
  const collectionRef = collection(firestore, "users");
  const q = query(collectionRef, orderBy("userName", "asc"));
  const { status, data: docs } = useFirestoreCollection(q);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (status === "success") {
      setUsers(docs);
    }
    if (docs !== null) {
      console.log(docs);
    }
  }, [status, docs]);
  return <Box component="div"></Box>;
};
