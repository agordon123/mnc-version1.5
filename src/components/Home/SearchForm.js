import { Box, TextField, IconButton, Grid, Button, Stack } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import { query, collection, getDocs, where } from "firebase/firestore";
import React, { useRef, useState } from "react";
import { InputUnstyled } from "@mui/base";
import Item from "../Misc/Surface";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from '@mui/system';
export const SearchForm = (props) => {

  const blue = {
    100: '#DAECFF',
    200: '#80BFFF',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
  };
  
  const grey = {
    50: '#F3F6F9',
    100: '#E7EBF0',
    200: '#E0E3E7',
    300: '#CDD2D7',
    400: '#B2BAC2',
    500: '#A0AAB4',
    600: '#6F7E8C',
    700: '#3E5060',
    800: '#2D3843',
    900: '#1A2027',
  };
  
  const StyledInputElement = styled('input')(
    ({ theme }) => `
    width: 400px;
    height: 50px;
    font-family: Garamond;
    fontSize: 50px;
    font-weight: 500;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 2px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  
    &:hover {
      border-color: ${blue[400]};
    }
  
    &:focus {
      border-color: ${blue[400]};
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }
  `,
  );
  
  const CustomInput = React.forwardRef(function CustomInput(props, ref) {
    return (
      <InputUnstyled components={{ Input: StyledInputElement }} {...props} ref={ref}
      className="search-input"
      type="text"
      onChange={(e) => handleChange(e)}
      placeholder="Search by City"/>
    );
  });


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
        <CustomInput/>
        <IconButton
          className="search-icon"
          aria-label="search"
          type="submit"
          disableFocusRipple
          sx={{
            height: 35,
            width: 35,
            top:8
          }}
        >
          <SearchTwoToneIcon
          sx={{
            height: 35,
            width: 40,
          }}
          />
        </IconButton>
      </Item>
      <br></br>
    </Grid2>
  );
};

export default SearchForm;
