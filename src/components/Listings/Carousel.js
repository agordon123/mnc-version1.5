import { auth, db } from "../../firebase";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
//import { getDownloadURL, ref } from "firebase/storage";
import { storage } from "../../firebase";
//import { getDownloadURL } from "firebase/storage";
//import { ref } from "firebase/storage";
import { getDownloadURL, ref as reff } from "firebase/storage"
import { useStorage, useStorageDownloadURL } from "reactfire";

import {
  query,
  getDocs,
  where,
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
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../../pages/Listings/styles.css";

//import {StyleSheet, Text, View, Imahe, TouchableHighlight} from 'react-native';
//import firebaseConfig from '.friebaseConfig.tsx';
//import { initializeApp } from "firebase/app";

export const CarouselImagePull = () => {
  /*Let me explain what is going on here, 
   When you use import * as React from 'react';, 
   it imports every react hooks. 
   Read this to get a further explanation on react hooks.   
   https://reactjs.org/docs/hooks-intro.html. I recommend reading
   the all documentation on hooks.

   To back on track, you see that the usestate and useeffect

  const [data, setData] = React.useState("");
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
  //const [images, setImages] = React.useState("");
  const [description, setDescription] = React.useState("");
  */
};
export function CarouselImage() {
  const storage = useStorage();
  const imageRef1 = reff(
    storage,
    "gs://mnc-development.appspot.com/images/listingImages/TestBathroomImage.jpg"
  );
  const imageRef2 = reff(
    storage,
    "gs://mnc-development.appspot.com/images/listingImages/TestImage.jpg"
  );
  const imageRef3 = reff(
    storage,
    "gs://mnc-development.appspot.com/images/listingImages/TestlivingRoom.jpg"

  );
  const { status, data: url1 } = useStorageDownloadURL(imageRef1);
  const { status2, data: url2 } = useStorageDownloadURL(imageRef2);
  const { status3, data: url3 } = useStorageDownloadURL(imageRef3);
  if (status === "loading") {
    return <span>loading...</span>;
  }
  if (status2 === "loading") {
    return <span>loading...</span>;
  }
  if (status3 === "loading") {
    return <span>loading...</span>;
  }
  return (
    <Carousel>
      <Carousel.Item>
        <img className="carousel" src={url1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel" src={url2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="carousel" src={url3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImage;
