import { Routes, Route, NavLink } from "react-router-dom";
import styled from "styled-components";

import ContactsBook from "./ContactsBook/ContactsBook.js";
import RegisterForm from "./AuthForms/RegisterForm.js";
import LogInForm from "./AuthForms/LogInForm.js";

import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { selectAuth } from "redux/selectors";
import UserPatch from "./UserPatch/UserPatch.js";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import authOperations from "redux/auth/auth-operations.js";
import { useState } from "react";



const StyledLink = styled(NavLink)`
  color: grey;

  &.active {
    color: turquoise;
  }
`;

const StyledNav = styled.div`
  display: flex;
  gap: 10px;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
`



/* <Route path='' element={ NotFoundPage } /> */

const App = () => {
  const [firstRender, setFirstRender ] = useState(0)
  const { isLoggedIn, token } = useSelector(selectAuth);

  const dispatch = useDispatch()

  const fetchCurrentUser = authOperations.currentAuth

  useEffect(() => {
    if (firstRender < 1) {
        setFirstRender(1)
      token && dispatch(fetchCurrentUser(token))
      return 
      }
    }, [firstRender, token, dispatch, fetchCurrentUser]);
  
  
  return (
    <>
      <StyledDiv>
        <StyledNav>
          <StyledLink to='/' end> Contacts </StyledLink>
          {!isLoggedIn &&
            <>
              <StyledLink to='/register' end> Register </StyledLink>
              <StyledLink to='/login' end> Login </StyledLink>
            </>}
        </StyledNav>
        {isLoggedIn && <UserPatch />}
      </StyledDiv>
      <Routes>
        <Route path="/" element={<ContactsBook />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LogInForm />} />
      </Routes>
    </>
  );
};


export default App
