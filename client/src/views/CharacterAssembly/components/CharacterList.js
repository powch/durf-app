import React from "react";
import styled from "styled-components";

const Container = styled.div(({ theme }) => ({
  marginTop: "2rem",
  width: "100%",
  display: "flex",
  flexDirection: "column",
}));

const HeaderContainer = styled.div(({ theme }) => ({
  height: "1.5rem",
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  paddingLeft: "0.5rem",
}));

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

const CharacterList = () => {
  return (
    <Container>
      <HeaderContainer>
        <Header>{"Characters"}</Header>
      </HeaderContainer>
      <ListContainer />
    </Container>
  );
};

export default CharacterList;
