import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import { async } from "regenerator-runtime";

const CharacterList = ({ appState }) => {
  const { state } = appState;
  const { user, currentPage } = state;

  return (
    <div>
      <h1>foo</h1>
    </div>
  );
};

export default CharacterList;
