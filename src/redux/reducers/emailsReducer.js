import { ActionTypes } from "../constants/action-types";
const intialState = {
  emails: [],
};

const favoritesInitailState = {
  favorites: [],
};

const readedEmailsInitialState = {
  readedEmails: [],
};
const filterByInitialState = {
  filterBy: "",
};

export const emailsReducer = (state = intialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_EMAILS:
      return { ...state, emails: payload };
    case ActionTypes.MARK_READ:
      return {
        ...state,
        emails: state.emails.map((el) => {
          if (el.id == payload) {
            return { ...el, markRead: true };
          }
          return { ...el };
        }),
      };
    case ActionTypes.MARK_FAVORITE:
      return {
        ...state,
        emails: state.emails.map((el) => {
          if (el.id == payload) {
            return { ...el, favorite: true };
          }
          return { ...el };
        }),
      };
    default:
      return state;
  }
};
// export const readedEmailsReducer = (
//   state = readedEmailsInitialState,
//   { type, payload }
// ) => {
//   switch (type) {
//     case ActionTypes.MARK_READ:
//       return { ...state, emails: payload };
//     default:
//       return state;
//   }
// };

export const selectedEmailReducer = (
  state = { display: "false" },
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SELECTED_EMAIL:
      return { ...state, ...payload, display: true };
    // case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //   return {};
    default:
      return state;
  }
};

export const filterReducer = (
  state = filterByInitialState,
  { type, payload }
) => {
  switch (type) {
    case ActionTypes.SET_FILTER:
      return { filterBy: payload };
    // case ActionTypes.REMOVE_SELECTED_PRODUCT:
    //   return {};
    default:
      return state;
  }
};

// export const favoriteEmailReducer = (
//   state = favoritesInitailState,
//   { type, payload }
// ) => {
//   switch (type) {
//     case ActionTypes.MARK_FAVORITE:
//       return { ...state, favorites: state.favorites.push(payload) };
//     case ActionTypes.REMOVE_FAVORITE:
//       return {
//         ...state,
//         favorites: state.favorites.filter((v) => v !== payload),
//       };
//     default:
//       return state;
//   }
// };
