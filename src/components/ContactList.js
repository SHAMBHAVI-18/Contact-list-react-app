import React from 'react';
import Contact from './Contact';

const ContactList = ({ users, onUpdateContact, onDeleteContact }) => {
  return (
    <div>
      <h2>Contact List</h2>
      {users.map((user) => (
        <Contact
          key={user.id}
          user={user}
          onUpdateContact={onUpdateContact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </div>
  );
};

export default ContactList;
