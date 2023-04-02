import React from 'react';
import { Contacts } from '../Contacts/Contacts';
import PropTypes from 'prop-types';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <Contacts contacts={contacts} deleteContact={deleteContact} />
    </div>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};
