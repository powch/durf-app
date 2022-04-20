import React from "react";
import styled from "styled-components";

import { PAGE_CHARACTER_LIST } from "../../constants";
import FullscreenModal from "../../components/FullscreenModal";
import Input from "../../components/Input";
import SpecializationRadio from "./components/SpecializationRadio";

const Container = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

const Heading = styled.h2({
  padding: 0,
  margin: 0,
});

const FormContainer = styled.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  marginTop: "2rem",
});

const CharacterCreator = ({ appState }) => {
  const { state, dispatch } = appState;
  const { newCharacter } = state;
  const { name, core_stats } = newCharacter;

  const handleChange = (property, value) =>
    dispatch({
      action: "UPDATE_NEW_CHARACTER_FORM",
      payload: { property, value },
    });

  const handleClose = () =>
    dispatch({
      action: "CHANGE_PAGE",
      payload: {
        page: PAGE_CHARACTER_LIST,
        cleanupAction: "newCharacter",
      },
    });

  return (
    <FullscreenModal handleClose={handleClose}>
      <Container>
        <Heading>New character</Heading>
        <FormContainer>
          <Input
            name={"name"}
            value={name}
            label={"Name"}
            handleChange={handleChange}
          />
          {/* <SpecializationRadio stats={[...core_stats]} /> */}
        </FormContainer>
      </Container>
    </FullscreenModal>
  );
};

export default CharacterCreator;
