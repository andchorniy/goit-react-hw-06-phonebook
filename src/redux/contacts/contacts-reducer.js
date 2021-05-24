import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import filterReducer from "../filter/filter-reducer";
import { addContact, deleteContact } from "./contacts-action";

const itemReducer = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;
