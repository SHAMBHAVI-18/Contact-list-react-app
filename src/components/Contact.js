import React, { useState } from 'react';

const Contact = ({ user, onUpdateContact, onDeleteContact }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    const updatedContact = { ...user, name: name, email: email };
    onUpdateContact(updatedContact);
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    onDeleteContact(user.id);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input type="text" value={name} onChange={handleNameChange} required />
          <input type="email" value={email} onChange={handleEmailChange} required />
          <button onClick={handleUpdateClick}>Update</button>
        </div>
      ) : (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Contact;
