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
import SearchForm from "../Home/SearchForm";
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

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
const BasicTable =({data})=>{
  
  const {bathrooms} = useParams();
  const firestore = useFirestore();
  const storage = useStorage();
  const batch = writeBatch(firestore);
  const formRef = useRef();
  //const [searchQuery, setsearchQuery] = useState(initialValues);
  const [docID, setDocID] = useState("");
  const [userRole, setUserRole] = useState("");
  const[street, setStreet] = useState("");
  //const newDoc = doc(firestore, `$listings/${searchQuery.type}/properties/${docID}`, );
  /*
  const collectionRef = collection(
    firestore,
    `listings/${searchQuery.type}/properties/`
  );
*/
  function createData(name, info) {
    return { name, info};
  }
    
  const rows = [
    createData('Street',  ),
    createData('City', ),
    createData('State', ),
    createData('Zip', ),
    createData('Bedroom(s)', ),
    createData('Bathroom(s)', ),
    createData('Price', ),
    createData('Listed At',),
    createData('Listed By', ),
  ];
  return(
   <div>
    {data.filter(listing => listing.bathrooms === bathrooms).map((listing,index)=> (
      <div key ={index}>
       <p>{listing.bathrooms}</p>
       <p>{listing.bedrooms}</p>
      </div>
    ))}
   </div>
  )
}
export default BasicTable