import actionTypes from "./contacts-types";
import { v4 as uuidv4 } from "uuid";

export const addContact = (value) => ({
  type: actionTypes.ADD,
  payload: {
    id: uuidv4(),
    name: value.name,
    number: value.number,
  },
});

export const deleteContact = (id) => ({
  type: actionTypes.DELETE,
  payload: id,
});
