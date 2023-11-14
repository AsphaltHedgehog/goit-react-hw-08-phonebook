import { StyledDiv, StyledNav, StyledLink } from './HeaderStyled';

// hook's 
import { useSelector } from "react-redux/es/hooks/useSelector.js";

// selectors
import { selectAuth } from "redux/selectors";

// components
import UserPatch from "components/UserPatch/UserPatch";



const Header = () => {
  const { isLoggedIn } = useSelector(selectAuth);
  return (
    <StyledDiv>
      <StyledNav>
        <StyledLink to='/' end> Home </StyledLink>
        {isLoggedIn ?
          <StyledLink to='/contacts'> Contacts </StyledLink> :
          <>
            <StyledLink to='/register'> Register </StyledLink>
            <StyledLink to='/login'> Login </StyledLink>
          </>
        }
      </StyledNav>
      {isLoggedIn && <UserPatch />}
    </StyledDiv>
  )
};


export default Header;