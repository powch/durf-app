import React, { useEffect } from "react";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

import { managementDomain } from "../../constants";
import { async } from "regenerator-runtime";

const CharacterList = ({ appState }) => {
  const { state } = appState;
  const { user } = state;
  const { getAccessTokenSilently } = useAuth0();

  useEffect(() => {
    (async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: managementDomain,
          scope: 'read:users',
        });
        const response = await fetch(`${managementDomain}/users/${user.sub}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('res: ', response.json());
      } catch (e) {
        console.error(e);
      }
    })();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <h1>foo</h1>
    </div>
  );
};

export default CharacterList;
