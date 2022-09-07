import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Fab,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Grid,
  Unstable_Grid2,
} from "@mui/material";
import Alert from "@mui/material/Alert";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  getDownloadURL,
  ref as reff,
  uploadBytesResumable,
} from "firebase/storage";
import { InputUnstyled } from "@mui/base";
import React, { useEffect, useReducer, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auditLogger, UseRadioGroup } from "./AdminPageComponents";
import { states } from "../Misc/constants";
import { Item } from "./AdminPageComponents";

const initialValues = {
  type: "forSale",
  street: "",
  city: "",
  state: "",
  zip: "",
  price: "",
  bedrooms: "",
  bathrooms: "",
  sqft: "",
  description: "",
  images: [],
};
const reducer = () => {

}
export const AddListingForm = () => {
  const formRef = useRef();
  const [data, setData] = useState(initialValues);
  const [state, dispatch] = useReducer(reducer, initialValues);
  const [progress, setProgress] = useState(0);



 
  return (
    <React.Fragment>
      <Grid>
        <Box
          className="add-listing-form"
          component="form"
          ref={formRef}
          /*
        The entire error is build.umd.js:3103 Warning: UploadImages: `ref` is not a prop. 
        Trying to access it will result in `undefined` being returned.
         If you need to access the same value within the child component, 
         you should pass it as a different prop. 
         
        */
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "left",
            padding: "10px",
            margin: "15%",
            border: "2px solid black",
            borderRadius: "5px",
            width: "75%",
            fontFamily: "Garamond",
          }}
         
        >
          <UseRadioGroup
            aria-label="listing-type"
            onChange={(e) => setData({ ...data, type: e.target.value })}
            name="type"
            sx={{
              justifyContent: "center",
              fontFamily: "Garamond",
              alignItems: "center",
              fontSize: "20px",
            }}
          />

          <TextField
            aria-label="street"
            name="street"
            label="Street Address"
            onChange={(e) => setData({ ...data, street: e.target.value })}
            sx={{
              fontFamily: "Garamond",
              width: "80%",
              backgroundColor: "white",
            }}
          />
          <TextField
            name="city"
            label="City"
            onChange={(e) => setData({ ...data, city: e.target.value })}
            sx={{ fontFamily: "Garamond", width: "80%" }}
          />
          <FormControl>
            <InputLabel id="state-label">State</InputLabel>
            <Select
              value={data.state}
              name="state"
              label="State"
              onChange={(e) => setData({ ...data, state: e.target.value })}
              sx={{ fontFamily: "Garamond", width: "80%" }}
            >
              {states.map((state) => (
                <MenuItem
                  value={state}
                  onChange={(e) => setData({ ...data, state: e.target.value })}
                >
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            name="zip"
            label="Zip Code"
            onChange={(e) => setData({ ...data, zip: e.target.value })}
            sx={{ fontFamily: "Garamond", width: "80%" }}
          />
          <TextField
            name="bedrooms"
            label="# of Bedrooms"
            onChange={(e) => setData({ ...data, bedrooms: e.target.value })}
            sx={{ fontFamily: "Garamond", width: "80%" }}
          />
          <TextField
            name="bathrooms"
            label="# of Bathrooms"
            onChange={(e) => setData({ ...data, bathrooms: e.target.value })}
            sx={{ fontFamily: "Garamond", width: "80%" }}
          />
          <TextField
            name="price"
            label="Listing Price"
            onChange={(e) => setData({ ...data, price: e.target.value })}
            sx={{ fontFamily: "Garamond", width: "80%", fontSize: "18px" }}
          />
          <InputUnstyled
            type="textarea"
            label="Description"
            //component="textarea"
            /*error here 
          Use the `defaultValue` or `value` props instead of setting children on <textarea>.
          I tried to figure this out by typing all of it in pascal case with T capitalized 
          out but it didn't work.I figured it out, how to fix the error for name by commenting it out and
          adding the value. 
          This is the reference on how I found this out
          https://stackoverflow.com/questions/30730369/reactjs-component-not-rendering-textarea-with-state-variable
          */
            placeholder="Property Details"
            name="description"
            onChange={(e) => setData({ ...data, description: e.target.value })}
            style={{
              fontFamily: "Garamond",
              width: "80%",
              justifyContent: "left",
              fontSize: "18px",
            }}
          />
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              ref={formRef}
              multiple
            />
            <Fab
              color="primary"
              aria-label="upload picture"
              component="span"
              
            >
              <PhotoCamera />
            </Fab>
          </label>
          {data.images.map((url) => {
            return <img src={url} alt="def" width="160px" height="90px" />;
          })}
          <Button type="submit" variant="contained" >
            Add Property
          </Button>
        </Box>
      </Grid>
    </React.Fragment>
  );
};

export default AddListingForm;
