import { IconButton, Grid, Button, Stack } from "@mui/material";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";
import React, { useState, forwardRef, useEffect } from "react";
import { InputUnstyled } from "@mui/base";
import Item from "../Misc/Surface";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { styled } from "@mui/system";
import { useUser, useFirestore, useSigninCheck } from "reactfire";
import {
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  setDoc,
  collection,
  where,
  addDoc,
  Firestore,
} from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../../pages/Home/styles.css";

//import FilterBox from "./Filter";
//import FormControlLabelPlacement from "./FilterRadioButtons";
import FilterRadioButtons  from "../../components/Home/FilterRadioButtons";
import { async } from "@firebase/util";
const blue = {
  100: "#DAECFF",
  200: "#80BFFF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
};
const grey = {
  50: "#F3F6F9",
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};
const StyledInputElement = styled("input")(
  ({ theme }) => `
  width: 550px;
  height: 50px;
  font-family: Garamond;
  fontSize: 75px;
  font-weight: 500;
  line-height: 1.5;
  padding: 12px;
  border-radius: 12px;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 2px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  box-shadow: 0px 2px 2px ${
    theme.palette.mode === "dark" ? grey[900] : grey[50]
  };
  
  &:hover {
    border-color: ${blue[400]};
  }
  
  &:focus {
    border-color: ${blue[400]};
    outline: 3px solid ${
      theme.palette.mode === "dark" ? blue[500] : blue[200]
    };
  }
`
);
const CustomInput = forwardRef(function CustomInput(props, ref) {
  
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
      className="search-input"
      type="text"
      placeholder="Search by City"
    />
  );
});
const initialValues = {
  type: "forSale",
  id: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  price: "",
  description: "",
  images: [],
  listed_by: "",
  created_at: "",
};

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

  //const [data, setData] = useState("");
  const[info, setInfo] = useState(initialValues);
  const [listings, setListings] = useState([]);
/*
  const [listings, setListings] = useState([
  {"street": ""},
  {"city": ""},
  {"state": ""},
  {"zip": ""},
  {"price": ""},
  {"description": ""},
  {"images": []},
  {"listed_by": ""},
  {"created_at": ""}]);
 */
 
  const { status, data: signInCheckResult } = useSigninCheck();
  const firestore = useFirestore();
  //const [docID, setDocID] = useState("");
  const listingsRef = collection(firestore, `listings/${info.type}/properties`);
    
  useEffect(()=>{
    const getData = async ()=>{
      const q = await getDocs(listingsRef,where()).then((onSnapshot)=>{
        onSnapshot.docs.entries();
        setListings(data.docs.map((doc)=> ({...doc.data(), id: doc.id})));
        console.log(data);
        })
      
    };
    getData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
  }

  
  const [type, setType] = useState("");

  
  const [searchQuery, setSearchQuery] = useState("");
 

  const getInfo = async() =>{
      await getDocs(listingsRef, {bathrooms: searchQuery})
  };

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
            disableFocusRipple
            className="buy-button"
            style={{
              fontSize: "16px",
              color: isHover ? "black" : "white",
              backgroundColor: isHover ? "white" : "#63666A",
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
            disableFocusRipple
            className="rent-button"
            style={{
              fontWeight: "bold",
              padding: "15px",
              fontSize: "16px",
              color: isHover2 ? "black" : "white",
              backgroundColor: isHover2 ? "white" : "#858181",
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
              backgroundColor: isHover3 ? "white" : "lightgrey",
              color: isHover3 ? "black" : "black",
              fontWeight: "bold",
            }}
            onClick={() => setType("sold")}
          >
            Sold
          </Button>
         
        </Item>
      </Grid2>
      <br></br>
      <Item  elevation={0}
      sx={{ display: "flex", flexDirection: "row", width: "100%" }}>
      <FilterRadioButtons></FilterRadioButtons>
      </Item>
      <br></br>
      <Item
        elevation={0}
        sx={{ width: "100%", flexDirection: "row", display: "flex" }}
      >
       
       
        <CustomInput onChange={handleChange}/>
        
        <IconButton
          className="search-icon"
          aria-label="search"
          type="submit"
          disableFocusRipple
          sx={{
            height: 35,
            width: 35,
            top: 8,
          }}
          onClick={getInfo}
        >
  
          <SearchTwoToneIcon
            sx={{
              height: 35,
              width: 40,
            }}
          />
        </IconButton>

      </Item>
      <Item elevation={0}
sx={{flexDirection: "column", display: "flex" }} className="box">
      {
      listings.map((listing, index)=> {
   return( 
   <div key = {index}>
    <p> Bathrooms: {listing.bathrooms}</p>
     <p>Price: {listing.price}</p>
     <p>City: {listing.city}</p>
     <p>Description: {listing.description}</p>
     <p>State: {listing.state}</p>
     <p>Street: {listing.street}</p>
     <p>Zip: {listing.zip}</p>
   </div>
   );
 })}
      </Item>
      <br></br>
    </Grid2>
  );
};

export default SearchForm;
