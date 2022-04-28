import React from "react";
import styled from "styled-components";

const CharacterPage = ({ appState }) => {
  const { state } = appState;
  const { activeCharacter } = state;
  return (
    <div>
      <h1>CHARACTER PAGE</h1>
    </div>
  );
};

export default CharacterPage;
