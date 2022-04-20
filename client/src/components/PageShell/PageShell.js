import React from "react";
import styled from "styled-components";

import HeaderBar from "./components/HeaderBar";
import CharacterActionBar from "./components/CharacterActionBar";
import Button from "../Button";

import { PAGE_CREATE_CHARACTER } from "../../constants";

const Container = styled.div({
  width: "100%",
  height: "100%",
});

const PageShell = ({ appState, children }) => {
  const { state, dispatch } = appState;
  const { activeCharacter } = state;

  return (
    <Container>
      <HeaderBar appState={appState} />
      {children}
      {activeCharacter ? (
        <CharacterActionBar appState={appState} />
      ) : (
        <Button
          size={"large"}
          css={{ borderRadius: 0, position: "fixed", bottom: 0 }}
          handleClick={() =>
            dispatch({
              action: "CREATE_NEW_CHARACTER",
            })
          }
        >
          {"Create a character"}
        </Button>
      )}
    </Container>
  );
};

export default PageShell;
