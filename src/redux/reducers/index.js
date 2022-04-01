import { combineReducers } from "redux";
import {
  emailsReducer,
  selectedEmailReducer,
  filterReducer,
} from "./emailsReducer";
const reducers = combineReducers({
  allEmails: emailsReducer,
  selectedEemail: selectedEmailReducer,
  filterBy: filterReducer,
  //   favorites: favoriteEmailReducer,
});
export default reducers;
