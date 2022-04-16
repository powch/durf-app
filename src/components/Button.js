import React from "react";
import styled from "styled-components";

const StyledButton = styled.button(({ theme, size, css }) => ({
  border: 0,
  borderRadius: ".25rem",
  backgroundColor: theme.primary,
  color: theme.fontColor,
  ...(size === "large"
    ? {
        width: "100%",
        height: "2.5rem",
      }
    : size === "medium"
    ? {
        width: "10rem",
        height: "2rem",
      }
    : size === "small"
    ? {
        width: "5rem",
        height: "1.5rem",
      }
    : {}),
  ...css,
}));

const Button = ({ children, size, handleClick, css }) => {
  return (
    <StyledButton size={size} onClick={handleClick} css={css}>
      {children}
    </StyledButton>
  );
};

export default Button;
