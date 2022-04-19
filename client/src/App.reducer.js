import {
  PAGE_CHARACTER_LIST,
  PAGE_CHARACTER_LIST_LOADING,
  PAGE_LOGIN,
} from "./constants";

export const initialState = {
  currentPage: PAGE_LOGIN,
  user: null,
};

export const reducer = (state, data) => {
  const { action, payload } = data;

  if (action.includes("SEED_USER_DATA")) {
    return {
      ...state,
      currentPage: PAGE_CHARACTER_LIST_LOADING,
      user: payload.user,
    };
  }

  if (action.includes("SEED_CHARACTER_DATA")) {
    console.log(payload);

    return {
      ...state,
      currentPage: PAGE_CHARACTER_LIST,
    };
  }

  return state;
};
