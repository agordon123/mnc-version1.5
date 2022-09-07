import { Box, TextField, IconButton, Grid, Button, Stack } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { InputUnstyled } from "@mui/base";
import Item from "../Misc/Surface";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const SearchForm = (props) => {
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
            className="buy-button"
            style={{
              fontSize: "16px",
              color: "white",
              backgroundColor: "black",
              fontWeight: "bold",
              padding: "15px",
              fontFamily: "Garamond",
            }}
            onClick={() => setType("forSale")}
          >
            Buy
          </Button>

          <Button
            className="rent-button"
            style={{
              fontWeight: "bold",
              padding: "15px",
              fontSize: "16px",
              color: "white",
              backgroundColor: "#858181",
              fontFamily: "Garamond",
            }}
            onClick={() => setType("rentals")}
          >
            Rent
          </Button>

          <Button
            className="sold-button"
            style={{
              borderBox: "solid 1px black",
              textAlign: "center",
              padding: "15px",
              fontSize: "16px",
              width: "90px",
              fontFamily: "Garamond",
              backgroundColor: "lightgrey",
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
            padding: "15px",
            fontSize: "20px",
            width: 500,
            height: 500,
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
            width: 40,
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
