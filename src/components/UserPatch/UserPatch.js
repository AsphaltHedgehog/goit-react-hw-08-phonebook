import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "redux/selectors";
// import styled from "styled-components";

import authOperations from "redux/auth/auth-operations";

import { StyledContainer, StyledEmailText, StyledLogoutButton } from './UserPatchStyled.js';

const UserPatch = () => {
  const { user } = useSelector(selectAuth)
  const dispatch = useDispatch()
  return (
    <StyledContainer>
      <StyledEmailText>{ user.email }</StyledEmailText>
      <StyledLogoutButton type="button" onClick={() => dispatch(authOperations.logOut())}>Logout</StyledLogoutButton>
    </StyledContainer>
  )
};


export default UserPatch;