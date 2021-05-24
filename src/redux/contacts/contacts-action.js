import { v4 as uuidv4 } from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("phonebook/AddContact", (value) => ({
  payload: {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  },
}));

export const deleteContact = createAction("phonebook/DeleteContact");
