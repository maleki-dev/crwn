import styled from "styled-components";

const backGroundStyles = ({ isGoogleSignIn, inverted }) =>
  isGoogleSignIn ? "#4285f4" : inverted ? "white" : "black";

const hoverBackGroundStyles = ({ isGoogleSignIn, inverted }) =>
  isGoogleSignIn ? "#357ae8" : inverted ? "black" : "white";

const colorStyles = ({ inverted }) => (inverted ? "black" : "white");

const hoverColorStyles = ({ inverted }) => (inverted ? "white" : "black");

const borderStyles = ({ inverted }) => (inverted ? "1px solid black" : "none");

const hoverBorderStyles = ({ isGoogleSignIn, inverted }) =>
  isGoogleSignIn ? "none" : inverted ? "none" : "1px solid black";

export const CustomButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: ${backGroundStyles};
  color: ${colorStyles};
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: ${borderStyles};
  cursor: pointer;

  &:hover {
    background-color: ${hoverBackGroundStyles};
    color: ${hoverColorStyles};
    border: ${hoverBorderStyles};
  }
`;
