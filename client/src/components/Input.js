import React from "react";
import styled from "styled-components";

const InputContainer = styled.div({
  display: "flex",
  flexDirection: "column",
});

const StyledInput = styled.input({
    border: '0.063rem grey solid',
    borderRadius: '0.25rem'
})

const Input = ({ label, value, name, handleChange }) => (
  <InputContainer>
    <label for={name}>{label}</label>
    <StyledInput
      name={name}
      value={value}
      onChange={(e) => handleChange(name, e.target.value)}
    />
  </InputContainer>
);

export default Input;
