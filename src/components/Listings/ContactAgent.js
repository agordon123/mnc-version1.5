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