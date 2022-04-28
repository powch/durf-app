import React from "react";
import styled from "styled-components";

import Button from "../../../components/Button";

const Container = styled.div({
  marginTop: "2rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
});

const HeaderContainer = styled.div({
  height: "1.5rem",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  paddingLeft: "0.5rem",
});

const Header = styled.h3(({ theme }) => ({
  margin: 0,
  fontSize: "0.875rem",
  color: theme.primaryDarker,
}));

const ListContainer = styled.div(({ theme }) => ({
  ...theme.roundedCorners,
  minHeight: "10rem",
  border: `0.063rem ${theme.primaryDarker} solid`,
}));

const ListItemContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  height: "3rem",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 1rem",
  borderBottom: "0.063rem grey solid",
});

const ListItem = ({ name, handleCharacterChoice }) => {
  return (
    <ListItemContainer>
      <p>{name}</p>
      <Button handleClick={handleCharacterChoice} size={"small"}>
        {"Load"}
      </Button>
    </ListItemContainer>
  );
};

const CharacterList = ({ appState }) => {
  const { state, dispatch } = appState;
  const { characters } = state;

  return (
    <Container>
      <HeaderContainer>
        <Header>{"Characters"}</Header>
      </HeaderContainer>
      <ListContainer>
        {characters.map((character, idx) => (
          <ListItem
            key={`character-${idx}`}
            name={character.name}
            handleCharacterChoice={() =>
              dispatch({
                action: "LOAD_CHARACTER",
                payload: { characterId: character._id },
              })
            }
          />
        ))}
      </ListContainer>
    </Container>
  );
};

export default CharacterList;
