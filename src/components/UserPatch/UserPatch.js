import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "redux/selectors";
import styled from "styled-components";

import authOperations from "redux/auth/auth-operations";

const StyledContainer = styled.div`
  display: flex;
  gap: 10px;
`

const UserPatch = () => {
  const { user, token } = useSelector(selectAuth)
  const dispatch = useDispatch()
  return (
    <StyledContainer>
      <p>{ user.email }</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>Logout</button>
    </StyledContainer>
  )
};


export default UserPatch;