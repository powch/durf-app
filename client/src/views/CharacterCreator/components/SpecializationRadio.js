import React from "react";
import styled from "styled-components";

const Container = styled.div({
  width: "100%",
  marginTop: "2rem",
  display: "flex",
  flexDirection: "column",
});

const RadioContainer = styled.div({
  display: "flex",
  flexDirection: "row",
  width: "100%",
});

const Specialization = () => {};

const SpecializationRadio = ({ stats }) => {
  return (
    <Container>
      <label>Specialization</label>
      <RadioContainer></RadioContainer>
    </Container>
  );
};

export default SpecializationRadio;
