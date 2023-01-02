import React from "react";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Drawer, PropTypes } from "@mui/material";
import CarouselImage from "../../components/Listings/Carousel";
import BasicTable from "../../components/Listings/Table";
import { onSnapshot, getDocs, doc } from "firebase/firestore";
import Footer from "../../components/Misc/Footer";
import NavBar from "../../components/Misc/NavBar";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import {
  Box,
  Typography,
  Button,
  TextField,
  ButtonGroup,
  TextareaAutosize,
  Divider,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import NestedList from "../../components/Listings/Sidenav.js";
import SearchForm from "../../components/Search/SearchForm";

//Actions Needed to Complete Listing Page
// 1. Get Listing Data
// 2. Get Listing Images
// 3. Display them in appropriate containers
// 4. come up with a system of navigation to cycle through images + also listings

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ListingPage = ({ data }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0.1}>
        <Grid item xs={10}>
          <CarouselImage></CarouselImage>
          <Box
            sx={{
              margin: "10px",
              width: "1000px",
              height: "200px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography>
              Description: “Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={2}>
            <BasicTable data ={data}></BasicTable>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ListingPage;
