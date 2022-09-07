import {
  getDocs,
  collection,
  serverTimestamp,
  orderBy,
  onSnapshot,
  addDoc,
  doc,
} from "firebase/firestore";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { TableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



export default function BasicTable(props) {



  //const [data, setData] = React.useState("");
  const formRef = React.useRef();
  const [type, setType] = React.useState("");
  const [street, setStreet] = React.useState("");
  const [city, setCity] = React.useState("");
  const [state, setState] = React.useState("");
  const [zip, setZip] = React.useState("");
  const [bedrooms, setBedrooms] = React.useState("");
  const [bathrooms, setBathrooms] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [listed_at, setListedAt] = React.useState("");
  const [listed_by, setListedBy] = React.useState("");
  const [images, setImages] = React.useState("");
  const [description, setDescription] = React.useState("");
/*
  I am not sure if I fixed it, I looked at the error and the console log
   said I shouldn't be using brackets but instead parenthesis. I didn't test it yet
   */
 const [data, setData] = React.useState("");


  function createData(name, info) {
    return { name, info};
  }
    
  const rows = [
    createData('Street', data.street),
    createData('City', document.getElementById('city')),
    createData('State', document.getElementById('state')),
    createData('Zip', document.getElementById('zip')),
    createData('Bedroom(s)', document.getElementById('bedrooms')),
    createData('Bathroom(s)', document.getElementById('bathrooms')),
    createData('Price', document.getElementById('price')),
    createData('Listed At', document.getElementById('listedAt')),
    createData('Listed By', document.getElementById('listedBy')),
  ];


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200, minHeight: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell sx ={{fontWeight:"bold"}}>For Rent</TableCell>
          <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.info}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
