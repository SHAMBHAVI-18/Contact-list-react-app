import axios from "axios";
import { useEffect, useState } from "react";
import ContactList from "./ContactList";
import ContactForm from "./ContactForm";


function App() {
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    fetchUsers();
  },[]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const addContact = async (newContact) => {
    // Simulate adding the contact by updating the local state
    setUsers([...users, newContact]);
  };

  const updateContact = async (updatedContact) => {
    // Simulate updating the contact by finding the contact with the same id and updating its properties
    setUsers(users.map((user) => (user.id === updatedContact.id ? updatedContact : user)));
  };

  const deleteContact = async (contactId) => {
    // Simulate deleting the contact by filtering out the contact with the specified id
    setUsers(users.filter((user) => user.id !== contactId));
  };

  return (
    <div className="App">
     <h1>Contact List App</h1>
     <ContactForm onAddContact={addContact} />
      <ContactList users={users} onUpdateContact={updateContact} onDeleteContact={deleteContact} />
    </div>
  );
}

export default App;
