
import ContactsForm from './ContactsForm/ContactsForm.js';

import ContactsList from './ContactsList/ContactsList.js'

import Filter from "./Filter/Filter.js";

import css from './contactsbook.module.css';


function ContactsBook() {

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