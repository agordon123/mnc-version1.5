import React from "react";
import {
  Route,
  Routes
 } from "react-router-dom";

import "./App.css";
import { AuthPage } from "./pages/Authentication";
import ListingPage from "./pages/Listings/index";
import { useEffect, useState, useReducer } from "react";
import AccountPage from "./pages/Account/index";
import Contact from "./pages/Contact/index";
import HomePage from "./pages/Home/index";
import AdminDashboard from "./pages/Admin";
import AuditLog from "./pages/Admin/AuditLog";
import { useUser } from "reactfire";
import NavBar from "./components/Misc/NavBar";
import { Spinner } from "react-bootstrap";
import SearchPage from "./pages/Search";
import { useParams } from 'react-router-dom'
import SearchForm from "./components/Home/SearchForm";
import ListingsContainer from "./components/Home/SearchForm";
import BasicTable from "./components/Listings/Table";

export const App = ({}) => {

  
  const { status, data: user } = useUser();

  const getUser = async () => {
    if (status === "loading") {
      return <Spinner />;
    }
    return user;
  };
  useEffect(() => {
    const userCheck = async () => {
      if (status === "loading") {
        return <Spinner />;
      }
      if (user !== null) {
        const currentUser = user;
        return currentUser;
      } else {
        return false;
      }
    };
    userCheck();
  });
  return (
    <div className="App">
      <NavBar user={getUser} />

        <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/account" element={<AccountPage />} />

        <Route exact path="/admin" element={<AdminDashboard />} />

        <Route exact path="/reset-password"
          element={<AuthPage title={"Password Reset"} />}
        />
        <Route exact path="/login" element={<AuthPage title="Login" />} />
        <Route exact path="/register" element={<AuthPage title="Register" />} />
        
        <Route
         exact path="/create-profile"
          element={<AuthPage title="New User Profile" />}
        />
        <Route exact path="/auditlog" element={<AuditLog />} />
        <Route path="/listings/" element={<ListingPage/>} />
        <Route path="/listings/:bathrooms" element={<ListingPage/>} />
        <Route path="/search" element={<SearchPage/>} />
        
        
        </Routes>
  
    </div>
  );
};
//  <Route path="/editListing/:id" element={<EditDocs database={database}/>} />
export default App;
