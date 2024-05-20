import { useState, useEffect } from "react";
import "./App.css";

import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

import initContactList from "./data/contactlist.json";
import { FaAddressBook } from "react-icons/fa";

const App = () => {
  const initContacts = () => {
    const localStorageData =
      JSON.parse(localStorage.getItem("contactList")) || initContactList;
    return localStorageData.length !== 0 ? localStorageData : initContactList;
  };

  const [contacts, setContacts] = useState(initContacts);
  const [searchText, setSearchText] = useState("");

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
    return contact.name.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <div className="container">
      <h1>
        <span>
          <FaAddressBook color="gray" />
        </span>
        Phonebook
      </h1>
      <ContactForm onAdd={addContact} />
      <SearchBox searchText={searchText} onSearch={setSearchText} />
      <ContactList list={contactList} onDelete={deleteContact} />
    </div>
  );
};

export default App;
