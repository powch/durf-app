import React from "react";
import styled from "styled-components";

import {
  PAGE_CHARACTER_LIST,
  PAGE_CREATE_CHARACTER_LOADING,
} from "../../constants";
import FullscreenModal from "../../components/FullscreenModal";
import Input from "../../components/Input";
import SpecializationRadio from "./components/SpecializationRadio";
import Button from "../../components/Button";

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
  marginTop: "3rem",
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

  const handleCreate = () =>
    dispatch({
      action: "CHANGE_PAGE",
      payload: { page: PAGE_CREATE_CHARACTER_LOADING },
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
          <SpecializationRadio
            stats={Object.entries(core_stats)}
            handleChange={handleChange}
          />
        </FormContainer>
        <Button
          size={"large"}
          handleClick={handleCreate}
          css={{ borderRadius: 0, position: "fixed", bottom: 0 }}
        >
          {"Create character"}
        </Button>
      </Container>
    </FullscreenModal>
  );
};

export default CharacterCreator;
