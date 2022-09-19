import {
  deleteDoc,
  doc,
  getDoc,
  where,
  query,
  collection,
  getDocs,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { ProfileChange } from "../../components/Account/ChangeUserInfo";
import { PortfolioChange } from "../../components/Account/PortfolioChange";
import SignOutBox from "../../components/Account/SignOutBox";
//import NavBar from "../../components/Misc/NavBar";
import ProfileEdit from "../../components/Account/AccountProfile";
import ChangePassword from "../../components/Account/ChangePassword";

import { useAuth } from "reactfire";
//This is white
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "rgb(255 255 255)" : "rgb(255 255 225)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
//This is gray item box, if need be. We can mix and match both
const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(196 196 196)" : "rgb(196 196 196)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  
}));

//need a profile edit component/form
//needs a component to display the profile automatically upon loading
export const AccountPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { status, data: user } = useAuth();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.001}>
        <Grid item xs={9}>
          <Item sx={{ height: 120, width: 1444 }}>
            <Typography
              variant="h1"
              sx={{
                fontFamily: "Garamond",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              Edit Profile
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{ height: 516, width: 1444 }}>
            <Grid container spacing={5}>
              <Grid item xs={6}>
                <Item>
                  <ProfileChange></ProfileChange>
                </Item>
                <Item>
                  <PortfolioChange></PortfolioChange>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                <SignOutBox></SignOutBox>
                </Item>
                <Item>
                <ChangePassword></ChangePassword>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AccountPage;
