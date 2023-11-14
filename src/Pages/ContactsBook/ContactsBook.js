// hook's
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

// components
import ContactsForm from 'components/ContactsBook/ContactsForm/ContactsForm.js';
import ContactsList from 'components/ContactsBook/ContactsList/ContactsList.js';
import Filter from 'components/ContactsBook/Filter/Filter';

// selectors
import { selectAuth } from 'redux/selectors';

// styles
import {
  StyledContainer,
  StyledHeader,
  StyledTitle,
  StyledList,
} from './ContactBookStyled.js';




function ContactsBook() {
  const { isLoggedIn } = useSelector(selectAuth);
  const nav = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      nav('/')
    }
  }, [isLoggedIn, nav]);

  return (
    <StyledContainer>
      <StyledHeader>Phonebook</StyledHeader>
      <ContactsForm />
      <div>
        <StyledTitle>Contacts</StyledTitle>
        <div>
          <Filter />
          <StyledList>
            <ContactsList />
          </StyledList>
        </div>
      </div>
    </StyledContainer>
  );
};

export default ContactsBook;