import React, { useState, useEffect, useReducer } from "react";
import Footer from "../../components/Misc/Footer";
import HomeTop from "../../components/Home/HomeTop";
import { Stack, Grid, Box } from "@mui/material";
import { Item } from "../../components/Admin/AdminPageComponents";
import { useLocation } from "react-router-dom";
import { NavBar } from "../../components/Misc/NavBar";
import { MNCLogo } from "../../components/Misc/MNCLogo";
import { SearchForm } from "../../components/Home/SearchForm";
//actions needed to finish HomePage
//needs to be styled and modularized into a logo and search bar , and a footer underneath

export const HomePage = (props) => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();
  };
  const [loggedIn, setLoggedIn] = useState(null);
  return (
    <Box component="div" direction="column" className="home__page">
      <Grid
        container={true}
        columns={24}
        rowSpacing={0}
        gridAutoRows
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <Grid
          item
          gridRow={1}
          xs={12}
          sx={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: "150px",
            margin: "auto",
          }}
        >
          <MNCLogo />
        </Grid>
        <Grid item>
          <Item sx={{ justifyContent: "center", width: "90%" }}>
            <SearchForm />
          </Item>
        </Grid>
      </Grid>
      <Footer className="footer" />
    </Box>
  );
};

export default HomePage;
