import React from "react";
import { Route, Routes } from "react-router-dom";
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

export const App = () => {
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
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/account" element={<AccountPage />} />

        <Route path="/admin" element={<AdminDashboard />} />

        <Route
          path="/reset-password"
          element={<AuthPage title={"Password Reset"} />}
        />
        <Route path="/login" element={<AuthPage title="Login" />} />
        <Route path="/register" element={<AuthPage title="Register" />} />
        <Route path="/listings" element={<ListingPage />} />
        <Route
          path="/create-profile"
          element={<AuthPage title="New User Profile" />}
        />
        <Route path="/auditlog" element={<AuditLog />} />
      </Routes>
    </div>
  );
};
//  <Route path="/editListing/:id" element={<EditDocs database={database}/>} />
export default App;
