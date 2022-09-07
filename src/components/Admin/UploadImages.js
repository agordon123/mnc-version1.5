import React, { useState, useEffect, useRef, forwardRef } from "react";
import {
  ref as reff,
  uploadBytes,
  getDownloadURL,
  listAll,
  list,
} from "firebase/storage";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Fab from "@mui/material/Fab";
import { v4 } from "uuid";
import { Box, Button, Typography, Stack, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import { InputUnstyled } from "@mui/base";
import { updateDoc, writeBatch, doc } from "firebase/firestore";
import { DirectionsCarTwoTone } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
const Input = styled("input")({
  display: "none",
});

//component to upload images with listings

export const UploadImages = ({ props, ref }) => {
  const [ imageUpload, setImageUpload ] = useState(null);
  const [ imageUrls, setImageUrls ] = useState([]);
  //const [response, setResponse] = useState(null);
  return (<React.Fragment>
    <h1></h1>
  </React.Fragment>)
}

