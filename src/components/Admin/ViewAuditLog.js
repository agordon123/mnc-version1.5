import React, { useState, useEffect, useRef } from "react";
import {
  query,
  getDocs,
  collection,
  onSnapshot,
  orderBy,
} from "firebase/firestore";
import { Button, TableRow } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";

// need to display firestore data in a table upon pressing a button;
export const ViewAuditLog = () => {
  const navigate = useNavigate();
  const handleClick = (e) => {};
  return (
    <React.Fragment>
      <Button
        onClick={handleClick}
        sx={{ color: "white", backgroundColor: "darkgrey" }}
      />
    </React.Fragment>
  );
};

export default ViewAuditLog;
