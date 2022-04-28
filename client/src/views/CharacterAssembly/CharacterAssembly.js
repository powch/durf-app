import React from "react";
import styled from "styled-components";

import PageShell from "../../components/PageShell/PageShell";
import CharacterList from "./components/CharacterList";
import CharacterPage from "./components/CharacterPage/CharacterPage";

const Container = styled.div({
  width: "100%",
  height: "100%",
  padding: "3rem 1rem",
});

const CharacterAssembly = ({ appState }) => {
  const { state } = appState;
  const { activeCharacter } = state;

  return (
    <PageShell appState={appState}>
      <Container>
        {!activeCharacter ? (
          <CharacterList appState={appState} />
        ) : (
          <CharacterPage appState={appState} />
        )}
      </Container>
    </PageShell>
  );
};

export default CharacterAssembly;
