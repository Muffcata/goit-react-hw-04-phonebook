import { React } from 'react';
import PropTypes from 'prop-types';
import style from '../Contacts/Contacts.module.css';

export const Contacts = props => {
  return (
    <ul className={style.wrapper}>
      {props.contacts.map(({ id, name, number }) => (
        <li className={style.list} key={id}>
          <div className={style.text}>
            <p className={style.name}>
              {name}: {number}
            </p>
            <div className={style.wrapper_button}>
              <button
                className={style.button}
                type="button"
                onClick={() => props.deleteContact(id)}
              >
                Delete
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;

Contacts.propTypes = {
  deleteContact: PropTypes.func,
  contacts: PropTypes.array,
};
