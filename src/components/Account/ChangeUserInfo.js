import React,{useEffect,useRef,useState} from 'react';
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import {
  Typography,
  ButtonGroup,
  TextareaAutosize,
  TextField,
  Alert,
} from "@mui/material";
import Button from "@mui/material/Button";
import DoneIcon from "@mui/icons-material/Done";
import { auth } from "../../firebase";
import {
  useUser,
  useFirestore,
  useSigninCheck,
  useFirestoreDocData,
} from "reactfire";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { Spinner } from "react-bootstrap";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? "rgb(196 196 196)" : "rgb(196 196 196)",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export const ProfileChange = (props) => {
  const { role } = props;
  const { data: user } = useUser();
  const firestore = useFirestore();
  const navigate = useNavigate();
  const formRef = useRef();
  const [userRole, setUserRole] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const { status, data: signInCheckResult } = useSigninCheck();
  const listingsArray = [1, 2, 3];
  const [isSubmit, setIsSubmit] = useState(false);
  //const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    userEmail: "",
    userName: "",
    role: "",
    min: "",
    max: "",
  });
  const userDoc = [
    { email: "", id: "email" },
    { userName: "", id: "userName" },
    { role: "", id: "role" },
    { currentPhoneNumber: "", id: "phonenumber" },
    { userID: "", id: "userID" },
  ];

 useEffect(() => {
    const userCheck = async () => {
      if (status === "loading") {
        return <Spinner />;
      }
      if (signInCheckResult.signedIn === true) {
        const currentUser = signInCheckResult.user;
        
        if (user !== null) {
          const docRef = doc(firestore, "users", currentUser.uid);
          await getDoc(docRef).then((onSnapshot) => {
            console.log(onSnapshot);
            const userRole = onSnapshot.get("role");
            const userEmail = onSnapshot.get()
            console.log(userRole);
            setUserRole(userRole);
            if (userRole === "Administrator") {
              document.getElementById("logout").style.display = "list-item";
              document.getElementById("login-page").style.display = "none";
              document.getElementById("admin-page").style.display = "list-item";
            } else if (userRole !== null) {
              document.getElementById("logout").style.display = "list-item";
              document.getElementById("login-page").style.display = "none";
              document.getElementById("admin-page").style.display = "none";
            } else {
              document.getElementById("logout").style.display = "none";
              document.getElementById("login-page").style.display = "list-item";
              document.getElementById("admin-page").style.display = "none";
            }
          });
        }
      }
    };
    userCheck();
  }, [status, setFormValue, signInCheckResult]);
 //const currentUser = signInCheckResult.user;
 
  const handleSubmit = async(e) => {
    const currentUser = signInCheckResult.user;
    const docRef = doc(firestore, "users", currentUser.uid);
    e.preventDefault();
    setIsSubmit(true);
    if (isSubmit) {
      setDoc(docRef, ...formValue).then((res) => {
        if (res) {
          return <Alert variant="success">Account Updated</Alert>;
        }
      });
    }
  };

  return (
    <Box
      component="form"
      ref={formRef}
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
        border: 1,
        borderColor: "gray",
        borderRadius: "5px",
        width: 600,
        backgroundColor: "gray",
      }}
      noValidate
      autoComplete="off"
    >
     
        <Typography
          variant="h4"
          sx={{
            fontFamily: "Garamond",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "40px",
            color: "white",
          }}
        >
          Edit User Info
        </Typography>
      
          <TextField
            required
            id={userName.id}
            //key={idx}
            label="Required"
            defaultValue=" Username:"
            value={formValue.userName}
            sx={{
              backgroundColor: "white",
              border: 1,
              borderColor: "gray",
              borderRadius: "5px",
            }}
          />
       
       
          <TextField
            required
            //id={email.id}
            //key={idx}
            label="Required"
            defaultValue=" Email:"
            value={userEmail}
            sx={{
              backgroundColor: "white",
              border: 1,
              borderColor: "gray",
              borderRadius: "5px",
            }}
          />
    

        <TextField
          id="outlined-password-input"
          label=" Current Phone Number"
          type="phone-number"
          autoComplete="phone-number"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
        <TextField
          id="outlined-password-input"
          label=" New Phone Number"
          type="phone-number"
          autoComplete="phone-number"
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />

        <TextField
          disabled
          id="outlined-disabled"
          label="UserID Change Disabled"
          defaultValue=""
          sx={{
            backgroundColor: "white",
            border: 1,
            borderColor: "gray",
            borderRadius: "5px",
          }}
        />
       
          <TextField
            disabled
            //id={role.id}
            //key={idx}
            label="Role Change Disabled"
            defaultValue=" User"
            value={formValue.role}
            sx={{
              backgroundColor: "white",
              border: 1,
              borderColor: "gray",
              borderRadius: "5px",
            }}
          />

      <Button
        variant="contained"
        sx={{ bottom: 0, right: -255 }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}
