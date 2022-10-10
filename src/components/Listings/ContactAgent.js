import {
    Box,
    Typography,
    Button,
    TextField,
    ButtonGroup,
    TextareaAutosize,
    Divider,
  } from "@mui/material";
  import React, { useRef, useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import Paper from "@mui/material/Paper";
  import Stack from "@mui/material/Stack";
  import { styled } from "@mui/material/styles";
  import emailjs from "@emailjs/browser";

  export default function ContactButton() {
    const handleSubmit = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_pr7qyvs",
          "template_li0il5a",
          formRef.current,
          "7avGOyYSCkf7Kx45h"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
  
    const formRef = useRef();
    return (
     
      <Button variant="outlined"
      onClick={handleSubmit}
      sx={{
      fontFamily: "Garamond",
      background: "gray",
      width: "100%",
      border: "2px solid white",
      borderRadius: "10px;",
      color: "white",
      }}>
      Contact Agent about this listing
      </Button>
     
    );
  }











  