import set from "lodash.set";

import {
  PAGE_CHARACTER_LIST,
  PAGE_CHARACTER_LIST_LOADING,
  PAGE_LOGIN,
  PAGE_CREATE_CHARACTER,
  newCharacterTemplate,
} from "./constants";

export const initialState = {
  currentPage: PAGE_LOGIN,
  user: null,
};

export const reducer = (state, data) => {
  const { action, payload } = data;

  if (action.includes("CHANGE_PAGE")) {
    const { cleanupAction } = payload;
    const { [cleanupAction]: removed, ...cleanedState } = state;

    return {
      ...(cleanupAction ? cleanedState : state),
      currentPage: payload.page,
    };
  }

  if (action.includes("SEED_USER_DATA")) {
    return {
      ...state,
      currentPage: PAGE_CHARACTER_LIST_LOADING,
      user: payload.user,
    };
  }

  if (action.includes("SEED_CHARACTER_DATA")) {
    const isNewUser = !payload?.lastErrorObject?.updatedExisting;

    return {
      ...state,
      currentPage: PAGE_CHARACTER_LIST,
      ...(!isNewUser
        ? { characters: payload.value.characters }
        : { characters: [] }),
    };
  }

  if (action.includes("CREATE_NEW_CHARACTER")) {
    return {
      ...state,
      currentPage: PAGE_CREATE_CHARACTER,
      newCharacter: newCharacterTemplate(),
    };
  }

  if (action.includes("UPDATE_NEW_CHARACTER_FORM")) {
    const { property, value } = payload;
    const updatedCharacter = set(state.newCharacter, property, value);

    console.log("fired: ", payload);

    return {
      ...state,
      newCharacter: updatedCharacter,
    };
  }

  return state;
};
