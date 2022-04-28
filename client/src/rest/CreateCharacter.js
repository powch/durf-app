import React, { useEffect } from "react";

const CreateCharacter = ({ state, onData, onError, children }) => {
  const { user, newCharacter } = state;

  const userId = user.sub.split("|")[1];

  const url = `/api/character/${userId}`;

  const finalizedCharacter = {
    ...newCharacter,
    inventory: {
      ...newCharacter.inventory,
      slots: newCharacter.core_stats.STR + newCharacter.inventory.slots,
    },
  };

  console.log("finalizedCharacter: ", finalizedCharacter);

  useEffect(() => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalizedCharacter),
    })
      .then((res) => res.json())
      .then((res) => onData(res))
      .catch((err) => onError(err));
  });

  return children || null;
};

export default CreateCharacter;
