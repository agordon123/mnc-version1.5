import { getDownloadURL, ref as referenced } from "firebase/storage";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Divider,
  IconButton,
  Box,
  Grid,
  TextField,
  Stack,
} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  collection,
  getDoc,
  query,
  where,
  doc,
  orderBy,
  getDocs,
} from "firebase/firestore";
import { useEffect } from "react";
import MNCLogo from "../Misc/MNCLogo";
import { SearchForm } from "./SearchForm";
import { ref } from "firebase/storage";
import Item from "../Misc/Surface";
const inputProps = {
  type: "search",
  fullWidth: true,
};

export const HomeTop = () => {
  //react hooks, navigate to a new page,

  const navigate = useNavigate();

  //hooks to manage state of the searchbar

  //state manager to select type of query

  const [img, setImg] = useState("");


  return (
    <React.Fragment>
      {" "}
      <MNCLogo />
      {""}
    </React.Fragment>
  );
};

export default HomeTop;
