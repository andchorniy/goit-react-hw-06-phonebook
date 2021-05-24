import { combineReducers } from "redux";
import actionTypes from "./contacts-types";

const itemReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.ADD:
      return [...state, action.payload];

    case actionTypes.DELETE:
      return state.filter((contact) => contact.id !== action.payload);

    default:
      return state;
  }
};
const filterReducer = (state = "", action) => state;
const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;
