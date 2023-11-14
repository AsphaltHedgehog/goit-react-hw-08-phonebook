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
import css from './contactsbook.module.css';



function ContactsBook() {
  const { isLoggedIn } = useSelector(selectAuth);
  const nav = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      nav('/')
    }
  }, [isLoggedIn, nav]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactsForm/>
      <div>
        <h2 className={css.title}>Contacts</h2>
          <div>
            <Filter/>
            <ul className={css.list}>
              <ContactsList/>
            </ul>
          </div>
      </div>
    </div>
  );
};

export default ContactsBook;