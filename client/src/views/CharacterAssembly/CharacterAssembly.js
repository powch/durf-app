import React, { useEffect } from "react";
import styled from "styled-components";

import PageShell from "../../components/PageShell/PageShell";
import CharacterList from "./components/CharacterList";

const Container = styled.div({
  width: "100%",
  height: "100%",
  padding: "3rem 1rem",
});

const CharacterAssembly= ({ appState }) => {
  const { state } = appState;
  const { characters } = state;

  return (
    <PageShell appState={appState}>
      <Container>
        <CharacterList />
      </Container>
    </PageShell>
  );
};

export default CharacterAssembly;
