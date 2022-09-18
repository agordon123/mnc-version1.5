import React, { useState, useEffect, useContext, startTransition } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { CatchingPokemonSharp, LogoutOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { StyledComponent } from "styled-components";
import { auth } from "../../firebase";
import {
  useUser,
  useFirestore,
  useSigninCheck,
} from "reactfire";
import {
  doc,
  getDoc,
} from "firebase/firestore";
import { Spinner } from "react-bootstrap";
/*const NavBarItem =StyledComponent.button`
  border: none;
  background-color: rgb(196, 196, 196);
  cursor: pointer;
  color: white;
  font-size: 20px;
  padding: 19px 20px;
  text-decoration: none;
  text-align: left;
  z-index: 3;
`; */

export const NavBar = () => {
  const { data: user } = useUser();
  const firestore = useFirestore();
  const navigate = useNavigate();

  const { status, data: signInCheckResult } = useSigninCheck();
  const pages = [
    {
      page: "/admin",
      text: "Administrator",
      onClickFunc: () => navigate("/admin"),
      id: "admin-page",
    },
    {
      page: "/contact",
      text: "Contact",
      onClickFunc: () => navigate("/contact"),
      id: "contact-page",
    },
    {
      page: "/listings",
      text: "Listings",
      onClickFunc: () => navigate("/listings"),
      id: "listing-page",
    },
    {
      page: "/account",
      text: "Profile",
      onClickFunc: () => navigate("/account"),
      id: "account-page",
    },

    {
      page: "/",
      text: "Login/Register",
      onClickFunc: () => navigate("/login"),
      id: "login-page",
    },
    {
      page: "/",
      text: "Logout",
      onClickFunc: () => {
        signOut(auth).then(() => {
        navigate("/");
      }) },
      //onClickFunc: () => navigate{},
      id: "logout",
    },
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
            console.log(userRole);
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
  });

  return (
    <header>
      <div className="navigation-bar">
        <div className="navigation-bar-left">
          <button className="nav-btn" href="/" onClick={() => navigate("/")}>
            MNC Development 3.20
          </button>
          <HomeIcon size={25} padding="2" />
        </div>
        <div className="navigation-bar-right">
          {pages.map((page, idx) => (
            <button
              className="nav-btn"
              id={page.id}
              key={idx}
              onClick={page.onClickFunc}
              sx={{ fontFamily: "Garamond" }}
            >
              {page.text}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
export default NavBar;
