import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function FormControlLabelPlacement() {
  //const [value, setValue] = React.useState('female');

  const [listing, setListing] = React.useState('listing');
  const [neighborhood, setNeighborhood] = React.useState('neighborhood');
  const [city, setCity] = React.useState('city');
  const [state, setState] = React.useState('state');
  const [address, setAddess] = React.useState('address');
  const [zip, setZip] = React.useState('zip');
  const [listing_ID, setListingID] = React.useState('listings_id');

  const handleChange = (event) => {
    setListing(event.target.value);
  };

  return (
    <FormControl sx={{display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    margin: "auto",
    }}>
      <FormLabel id="demo-controlled-radio-buttons-group"
      sx={{fontWeight: 'bold', fontSize:"25px"}}
      >Listing Filter</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={listing}
        onChange={handleChange}
        sx={{ display: "flex", flexDirection: "row", width: "100%" }}
      >
        <FormControlLabel value={neighborhood} control={<Radio />} label="Neighborhood" />
        <FormControlLabel value={city} control={<Radio />} label="City" />
        <FormControlLabel value={state} control={<Radio />} label="State" />
        <FormControlLabel value={address} control={<Radio />} label="Address" />
        <FormControlLabel value={zip} control={<Radio />} label="Zip" />
        <FormControlLabel value={listing_ID} control={<Radio />} label="Listing ID" />
        
      </RadioGroup>
    </FormControl>
  );
}
