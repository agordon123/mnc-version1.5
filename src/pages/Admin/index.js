import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import AddListingForm from "../../components/Admin/AddListing";
import AddListing from "../../components/Admin/AddListing";
import SearchUser from "../../components/Admin/SearchUser";
import UploadImages from "../../components/Admin/UploadImages";
import { Alert, Box, Divider, Stack } from "@mui/material";
import { where, getDoc, query, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import ViewAuditLog from "../../components/Admin/ViewAuditLog";
//import { useAuth } from "../../Context/AuthContext";
import Footer from "../../components/Misc/Footer";
import { Item } from "../../components/Admin/AdminPageComponents";
import NavBar from "../../components/Misc/NavBar";
// needs to check to see if user is admin and if they are, show the admin page
// need a component to edit any user profile
// need a component to view the audit log
// need a component to Add and edit listings, and a component to view all listings
//need to upload pictures to go with listings

const AdminPage = () => {



  return (
    <Stack className="admin-container" component="div" direction="column">
   
      <AddListingForm />
      <ViewAuditLog />
      
    </Stack>
  );
};

export default AdminPage;
