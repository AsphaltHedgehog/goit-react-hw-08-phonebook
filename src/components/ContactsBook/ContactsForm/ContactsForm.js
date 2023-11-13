import { useState } from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import { addContact } from "redux/operation"; 

import { selectContacts } from "redux/selectors";


import css from './contactform.module.css'

function ContactsForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const { items } = useSelector(selectContacts);


  const handleSubmit = event => {
    event.preventDefault();

    if (items.find((contact) => contact.name === name || contact.number === number)) {
      alert('this contact already exist');
      return;
    }

    if (name.trim() === '' || number.trim() === '') {
      alert('Enter a name and number');
      reset()
      return;
    };

    dispatch(addContact({name, number}));

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="enter name"
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={(event) => setNumber(event.target.value)}
            placeholder="enter telephone number"
            required
            className={css.input}
          />
        </label>
        <button type='submit' className={css.btn}>Add Contact</button>
      </form>
    </div>
  );
};





export default ContactsForm;