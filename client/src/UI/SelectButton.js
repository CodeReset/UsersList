import styled from "styled-components";

export const SelectButton = styled.button`
  width: 180px;
  height: 60px;
  font-size: 18px;
  background: ${(props) => (props.active ? "#24A8ED" : "transparent")};
  color: ${(props) => (props.active ? "white" : "#333")};
  border: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border-radius: 30px;
  font-family: ${(props) => (props.active ? "Roboto-Bold" : "Roboto-Regular")};
`;
