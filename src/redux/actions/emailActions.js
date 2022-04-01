import { ActionTypes } from "../constants/action-types";

export const setEmails = (emails) => {
  return {
    type: ActionTypes.SET_EMAILS,
    payload: emails,
  };
};

export const selectedEmail = (email) => {
  return {
    type: ActionTypes.SELECTED_EMAIL,
    payload: email,
  };
};

export const markEmailRead = (id) => {
  return {
    type: ActionTypes.MARK_READ,
    payload: id,
  };
};
// export const removeSelectedEmail = () => {
//   return {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCT,
//   };
// };

export const markFavorite = (id) => {
  return {
    type: ActionTypes.MARK_FAVORITE,
    payload: id,
  };
};
export const removeFavorite = (email) => {
  return {
    type: ActionTypes.REMOVE_FAVORITE,
    payload: email,
  };
};

export const markFilterBy = (filterVal) => {
  return {
    type: ActionTypes.SET_FILTER,
    payload: filterVal,
  };
};
