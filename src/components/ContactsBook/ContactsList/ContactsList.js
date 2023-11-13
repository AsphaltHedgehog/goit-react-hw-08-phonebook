
import css from './contactlist.module.css'

import { useDispatch, useSelector } from "react-redux";

import { selectStatusFilter, selectContacts} from "redux/selectors";
import { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operation';

function ContactsList() {
  const {items, isLoading, error} = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  const renderContactsHandler = () => {
    
    const filteredList = items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filteredList.map(({ id, name, number }) => (
      <li key={id} className={css.item}>{name}: {number}
        <button
          type='button'
          onClick={() => dispatch(deleteContact(id))}
          className={css.btn}
        >Delete</button>
      </li>
    ));
  };


  return (
    <div className={css.wrapper}>
      {isLoading && !error && <p>Loading, pls wait...</p>}
      {error && <p>{ error }</p>}
      {items.length > 0 && renderContactsHandler()}
    </div>
  );
};

export default ContactsList;