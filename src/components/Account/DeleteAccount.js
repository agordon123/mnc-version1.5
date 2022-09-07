import styled from 'styled-components';
import { useNavigate ,useLocation} from 'react-router-dom';
import { db,userSignOut } from '../../firebase';
import { ProfileButton } from "./AccountStyles";
import { deleteDoc,collection,doc,query,where } from 'firebase/firestore';
import React, { useEffect,useState } from 'react';
import { StyledProfileLabel } from './AccountStyles';


const AccountPageDeleteProfileBox = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  //function to delete the user's account
  const deleteUser = async(e) => {
    e.preventDefault();
    const user = location.state.user;
    let docRef =query(collection(db,"users"),where("email","==",user));
    deleteDoc(docRef).then(() => userSignOut());
    navigate("/", { state: { user: user } });
  };
  //useEffect hook that will navigate back to the home page if on the account page and not logged in
  useEffect(() => {

  })
  return (
    <div className="delete-profile-box">
      <h4>Delete Account</h4>
      <p>
        <StyledProfileLabel>
          This action is permanent and cannot be reversed
        </StyledProfileLabel>
      </p>
      <ProfileButton id="delete-account" onClick={deleteUser}>
        Delete
      </ProfileButton>
    </div>
  );
};

export default AccountPageDeleteProfileBox;
