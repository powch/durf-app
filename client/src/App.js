// External imports
import React, { useReducer } from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Auth0Provider } from "@auth0/auth0-react";

// Internal imports
import { theme } from "./theme";
import { initialState, reducer } from "./App.reducer";
import { authDomain, authClientId } from "./constants";
import LoginScreen from "./views/LoginScreen/LoginScreen";
import CharacterAssembly from "./views/CharacterAssembly/CharacterAssembly";
import CharacterCreator from "./views/CharacterCreator/CharactorCreator";
import {
  PAGE_LOGIN,
  PAGE_CHARACTER_LIST,
  PAGE_CREATE_CHARACTER,
  PAGE_CHARACTER_LIST_LOADING,
  PAGE_CREATE_CHARACTER_LOADING,
} from "./constants";

// REST imports
import GetCharacter from "./rest/GetCharacters";
import CreateCharacter from "./rest/CreateCharacter";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html body {
    font-size: 16px;
    margin: 0;
    padding: 0;
    border: 0;
    font-family: Ariel, sans-serif;
    width: 100%;
    overflow: auto;
  }

  button,
  input,
  optgroup,
  select,
  textarea {
    font-family: inherit; /* 1 */
    font-size: 100%; /* 1 */
    line-height: 1.15; /* 1 */
    margin: 0; /* 2 */
  }

  /**
   * Show the overflow in IE.
   * 1. Show the overflow in Edge.
   */

  button,
  input { /* 1 */
    overflow: visible;
  }

  /**
   * Remove the inheritance of text transform in Edge, Firefox, and IE.
   * 1. Remove the inheritance of text transform in Firefox.
   */

  button,
  select { /* 1 */
    text-transform: none;
  }

  /**
   * Correct the inability to style clickable types in iOS and Safari.
   */

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }
`;

const AppContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  minHeight: "100vh",
  backgroundColor: "#F5F5F5",
});

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { currentPage } = state;

  console.log('currentPage: ', currentPage);

  const loading = currentPage.includes("loading");

  return (
    <Auth0Provider
      domain={authDomain}
      clientId={authClientId}
      redirectUri={window.location.origin}
    >
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <AppContainer id="app-container">
          {/* Loading screen */}
          {loading ? (
            <div>
              <h1>LOADING</h1>
            </div>
          ) : null}
          {/* Feature views */}
          {!loading && currentPage.includes(PAGE_LOGIN) ? (
            <LoginScreen appState={{ state, dispatch }} />
          ) : null}
          {!loading && currentPage.includes(PAGE_CHARACTER_LIST) ? (
            <CharacterAssembly appState={{ state, dispatch }} />
          ) : null}
          {!loading && currentPage.includes(PAGE_CREATE_CHARACTER) ? (
            <CharacterCreator appState={{ state, dispatch }} />
          ) : null}
          {/* REST calls */}
          {currentPage.includes(PAGE_CHARACTER_LIST_LOADING) ? (
            <GetCharacter
              state={state}
              onData={(payload) =>
                dispatch({ action: "SEED_CHARACTER_DATA", payload })
              }
              onError={(err) => console.log(err)}
            />
          ) : null}
          {currentPage.includes(PAGE_CREATE_CHARACTER_LOADING) ? (
            <CreateCharacter
              state={state}
              onData={(payload) =>
                dispatch({ action: "NEW_CHARACTER_SAVED", payload })
              }
              onError={(err) => console.log(err)}
            />
          ) : null}
        </AppContainer>
      </ThemeProvider>
    </Auth0Provider>
  );
};

export default App;
