import { Box, TextField, IconButton, Grid, Button, Stack } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { InputUnstyled } from "@mui/base";
import Item from "../Misc/Surface";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const SearchForm = (props) => {


  const [isHover, setIsHover] = useState(false);
  const [isHover2, setIsHover2] = useState(false);
  const [isHover3, setIsHover3] = useState(false);

  const handleMouseEnter = () => {
     setIsHover(true);
  };

  const handleMouseLeave = () => {
     setIsHover(false);
  };

  const handleMouseEnter2 = () => {
   setIsHover2(true);
  };
  const handleMouseLeave2 = () => {
   setIsHover2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHover3(true);
 };
 const handleMouseLeave3 = () => {
    setIsHover3(false);
 };

  const [searchQuery, setSearchQuery] = useState("");
  const [type, setType] = useState("");
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };


  return (
    <Grid2
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        margin: "auto",
      }}
    >
      <Grid2 sm={8}>
        <Item
          elevation={0}
          sx={{ display: "flex", flexDirection: "row", width: "100%" }}
        >
          <Button
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="buy-button"
            style={{
              fontSize: "16px",
              color: isHover? "black": "white",
              backgroundColor: isHover? "white": "#63666A",
              fontWeight: "bold",
              padding: "15px",
              fontFamily: "Garamond",
              transitionDuration:"0.4s",
            }}
            onClick={() => setType("forSale")}
          >
            Buy
          </Button>

          <Button
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}
            className="rent-button"
            style={{
              fontWeight: "bold",
              padding: "15px",
              fontSize: "16px",
              color: isHover2? "black":"white",
              backgroundColor: isHover2? "white":"#858181",
              fontFamily: "Garamond",
        
            }}
            onClick={() => setType("rentals")}
          >
            Rent
          </Button>

          <Button
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}
            className="sold-button"
            style={{
              borderBox: "solid 1px black",
              textAlign: "center",
              padding: "15px",
              fontSize: "16px",
              width: "90px",
              fontFamily: "Garamond",
              backgroundColor: isHover3? "white":"lightgrey",
              color: isHover3? "black": "black",
              fontWeight: "bold",
            }}
            onClick={() => setType("sold")}
          >
            Sold
          </Button>
        </Item>
      </Grid2>
      <br></br>
      <Item
        elevation={0}
        sx={{ width: "100%", flexDirection: "row", display: "flex" }}
      >
        <InputUnstyled
          className="search-input"
          type="text"
          onChange={(e) => handleChange(e)}
          placeholder="Search by City"
          sx={{
            padding: "50px",
            fontSize: "25px",
            width: "400px",
            height: "400px",
            border: "black solid 1px",
            backgroundColor: "white",
          }}
        />
        <IconButton
          className="search-icon"
          aria-label="search"
          type="submit"
          disableFocusRipple
          sx={{
            height: 25,
            width: 35,
          }}
        >
          <SearchTwoToneIcon />
        </IconButton>
      </Item>
      <br></br>
    </Grid2>
  );
};

export default SearchForm;
