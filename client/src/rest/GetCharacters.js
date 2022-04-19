import React, { useEffect } from "react";

const GetCharacter = ({ state, onData, onError, children }) => {
  const { user } = state;

  const userId = user.sub.split("|")[1];

  const url = `/api/user/${userId}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => onData(res))
      .catch((err) => onError(err));
  });

  return children || null;
};

export default GetCharacter;
