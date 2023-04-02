import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import style from './ContactForm.module.css';

export const ContactForm = props => {
  const [values, setValues] = useState({
    name: '',
    number: '',
  });
  const { name, number } = values;

  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = values;
    props.onSubmit(name, number);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevState => ({ ...prevState, [name]: value }));
  };

  // const reset = () => {
  //   setValues();
  // };

  const nameInputId = nanoid();
  const numberInputId = nanoid();
  return (
    <div className={style.form_wrapper}>
      <form onSubmit={handleSubmit}>
        <label className={style.label} htmlFor={nameInputId}>
          Name
          <input
            className={style.input_name}
            id={nameInputId}
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label className={style.label} htmlFor={numberInputId}>
          Number
          <input
            className={style.input_number}
            id={numberInputId}
            value={number}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <button className={style.button} type="submit">
            Add Contact
          </button>
        </label>
      </form>
    </div>
  );
};

export default ContactForm;

ContactForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  reset: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string,
};
