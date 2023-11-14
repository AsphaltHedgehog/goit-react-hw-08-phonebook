import css from './contactlist.module.css'

import { useDispatch, useSelector } from "react-redux";

import { selectStatusFilter, selectContacts} from "redux/selectors";
import { useEffect, useState } from 'react';
import { fetchContacts, deleteContact } from 'redux/operation';
import Modal from 'components/Modal/Modal';

function ContactsList() {
  const {items, isLoading, error} = useSelector(selectContacts);
  const filter = useSelector(selectStatusFilter);
  const [firstRender, setFirstRender] = useState(0)

  // edit and modal hook's
  const [editingContact, setEditingContact] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch()

  useEffect(() => {
    if (firstRender < 1) {
      setFirstRender(1)
      return
    }
    dispatch(fetchContacts())
  }, [dispatch, firstRender]);

  const handleEditClick = (contact) => {
    setEditingContact(contact)
    setIsModalOpen(true);
  }

  const renderContactsHandler = () => {
    
    const filteredList = items.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));

    return filteredList.map(({ id, name, number }) => (
      <li key={id} className={css.item}>{name}: {number}
        <button
          type='button'
          onClick={() => handleEditClick({id, name, number})}
          className={css.btn}
        >Edit</button>
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
      {isLoading && !error && <p>Loading</p>}
      {error && <p>{ error }</p>}
      {items.length > 0 && renderContactsHandler()}

      {isModalOpen && (<Modal
        contact={editingContact}
        onClose={() => setIsModalOpen(false)}
      />)}
    </div>
  );
};

export default ContactsList;