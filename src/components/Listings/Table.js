import {
  getDocs,
  collection,
  serverTimestamp,
  orderBy,
  onSnapshot,
  addDoc,
  doc,
  getDoc,
documentId,
setDoc,
writeBatch,
} from "firebase/firestore";
import { useState, useEffect, useRef } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { TableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ContactButton from "./ContactAgent";
import {
  useFirestore,
  useFirestoreCollection,
  useStorage,
  useStorageDownloadURL,
  useStorageTask,
} from "reactfire";
/*I tried to put the button outside the table container but it didn't work. 
So for now it will be there for now. Maybe there is way to change

*/
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
export default function BasicTable(props) {
  const firestore = useFirestore();
  const storage = useStorage();
  const batch = writeBatch(firestore);
  const formRef = useRef();
  const [data, setData] =useState(initialValues);
  const [docID, setDocID] = useState("");
  const [userRole, setUserRole] = useState("");
  const[street, setStreet] = useState("");
  //const newDoc = doc(firestore, `$listings/${data.type}/properties/${docID}`, );
  const collectionRef = collection(
    firestore,
    `listings/${data.type}/properties/${docID}`
  );
  const docData = {
    street: data.street,
    city: data.city,
    state: data.state,
    zip: data.zip,
    bedrooms: data.bedrooms,
    bathrooms: data.bathrooms,
    images: data.images,
    sqft: data.sqft,
    price: data.price,
    listed_at: data.listed_at,
    listed_by: data.listed_by
  };
  
  const [setDocData] = useState("");
 useEffect(() => {
    const userCheck = async () => {
          await getDoc(collectionRef).then((onSnapshot) => {
            console.log(onSnapshot);
            const street = onSnapshot.get("street");
            console.log(street);
            setStreet(street);
          });
        }
      
    userCheck();
  });

/*
const docRef = doc(firestore, "users", currentUser.uid);
 getDoc(docRef).then((onSnapshot) => {
  console.log(onSnapshot);
  const userRole = onSnapshot.get("role");
  console.log(userRole);
  setUserRole(userRole);
*/
/*
  I am not sure if I fixed it, I looked at the error and the console log
   said I shouldn't be using brackets but instead parenthesis. I didn't test it yet
   */
 //const [data, setData] = 
 
 
 useState("");


  function createData(name, info) {
    return { name, info};
  }
    
  const rows = [
    createData('Street', street),
    createData('City', data.city),
    createData('State', data.state),
    createData('Zip', data.zip),
    createData('Bedroom(s)', data.bedrooms),
    createData('Bathroom(s)', data.bathrooms),
    createData('Price', data.price),
    createData('Listed At', data.listed_at),
    createData('Listed By', data.listed_by),
  ];


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200, minHeight: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell sx ={{fontWeight:"bold"}}>{data.type}</TableCell>
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
      <div></div>
      
      <ContactButton></ContactButton>
    </TableContainer>
    
    
  );
}
