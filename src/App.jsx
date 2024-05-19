import { useState, useEffect } from "react";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import initContactList from "./data/contactlist.json";

const App = () => {
  const initContacts = () => {
    const localStorageData =
      JSON.parse(localStorage.getItem("contactList")) || initContactList;
    return localStorageData.length !== 0 ? localStorageData : initContactList;
  };

  const [contacts, setContacts] = useState(initContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact) => {
    setContacts((list) => {
      return [...list, contact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((list) => {
      return list.filter((contact) => contact.id !== contactId);
    });
  };

  const contactList = contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox filter={filter} onFilter={setFilter} />
      <ContactList list={contactList} onDelete={deleteContact} />
    </div>
  );
};

export default App;
