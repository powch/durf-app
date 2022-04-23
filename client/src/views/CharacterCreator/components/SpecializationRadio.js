import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

import { newCharacterTemplate } from "../../../constants";

const Container = styled.div({
  width: "100%",
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
});

const StyledLabel = styled.label(({ theme }) => ({
  ...theme.label,
}));

const RadioContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  justifyContent: "space-evenly",
});

const SpecializationContainer = styled.div(({ theme, active }) => ({
  display: "flex",
  flexDirection: "row",
  height: "4rem",
  width: "5rem",
  padding: "0.5rem",
  backgroundColor: "white",
  ...theme.roundedCorners,
  ...(active
    ? { border: `0.125rem ${theme.primary} inset` }
    : { border: "0.063rem grey solid" }),
}));

const StatContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "3rem",
});

const IconContainer = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: theme.primary,
}));

const NameContainer = styled.div(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "0.5rem",
  color: theme.primary,
  marginTop: "0.5rem",
  fontWeight: "bold",
}));

const ValueContainer = styled.div(({ active }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "2rem",
  color: `${active ? "green" : "black"}`,
}));

const Specialization = ({ active, name, value, handleRadioClick }) => {
  return (
    <SpecializationContainer active={active} onClick={() => handleRadioClick()}>
      <StatContainer>
        <IconContainer>
          {name === "STR" ? (
            <FontAwesomeIcon icon={solid("fist-raised")} size={"xl"} />
          ) : name === "DEX" ? (
            <FontAwesomeIcon icon={solid("running")} size={"xl"} />
          ) : (
            <FontAwesomeIcon icon={solid("hat-wizard")} size={"xl"} />
          )}
        </IconContainer>
        <NameContainer>{name}</NameContainer>
      </StatContainer>
      <ValueContainer active={active}>{value}</ValueContainer>
    </SpecializationContainer>
  );
};

const SpecializationRadio = ({ stats, handleChange }) => {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <Container>
      <StyledLabel>{"Specialization"}</StyledLabel>
      <RadioContainer>
        {stats.map((stat, idx) => (
          <Specialization
            key={`specialization-${idx}`}
            active={activeIdx === idx}
            handleRadioClick={() => {
              setActiveIdx(idx);
              handleChange("core_stats", {
                ...newCharacterTemplate().core_stats,
                [stat[0]]: 3,
              });
            }}
            name={stat[0]}
            value={stat[1]}
          />
        ))}
      </RadioContainer>
    </Container>
  );
};

export default SpecializationRadio;
