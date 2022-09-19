import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import AddListingForm from "../../components/Admin/AddListing";

import { Stack, Typography } from "@mui/material";
import { where, getDoc, query, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ViewAuditLog from "../../components/Admin/ViewAuditLog";
import { ManageUsers } from "../../components/Admin/ManageUsers";

const AdminPage = () => {
  return (
    <Stack className="admin-container" component="div" direction="column">
      <Typography variant="h5" sx={{ fontFamily: "Garamond" }}>
        {" "}
        Add New Listing
      </Typography>
      <AddListingForm />
      <br></br>
      <ManageUsers />
      <ViewAuditLog />
    </Stack>
  );
};

export default AdminPage;
