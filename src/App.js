import { Component } from "react";
import { v4 as uuidv4 } from "uuid";

import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { addContact, deleteContact } from "./redux/contacts/contacts-action";

const App = (contacts, deleteContact) => {
  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem("contacts"));
  //   this.setState({ contacts: contacts ?? [] });
  // }
  // componentDidUpdate() {
  //   localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
  // }
  // handleFilterChange = (e) => {
  //   const { value } = e.currentTarget;
  //   this.setState({ filter: value });
  // };
  // filterContacts = () => {
  //   const { contacts, filter } = this.state;
  //   const regExp = new RegExp(filter, "gi");
  //   return contacts.filter((contact) => regExp.test(contact.name));
  // };
  // addContact = (name, number) => {
  //   if (this.state.contacts.find((contact) => contact.name === name)) {
  //     alert(`${name} is already in contacts `);
  //   } else {
  //     const newContact = {
  //       id: uuidv4(),
  //       name: name,
  //       number: number,
  //     };
  //     this.setState({
  //       contacts: [...this.state.contacts, newContact],
  //     });
  //   }
  // };
  // deleteContact = (e) => {
  //   const { contacts } = this.state;
  //   this.setState({
  //     contacts: contacts.filter((contact) => contact.id !== e.currentTarget.id),
  //   });
  // };
  return (
    <div className="App">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {/* <Filter
          filter={this.state.filter}
          handleChange={this.handleFilterChange}
        /> */}

      {<ContactList />}
    </div>
  );
};

export default App;
