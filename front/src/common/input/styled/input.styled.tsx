import styled from "styled-components";

export const InputStyled = styled.input`
  background-color: #232a3f;
  font-size: 20px;
  width: 220px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #e6a15c;
  text-align: center;
  color: #e6a15c;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ color }) => color};
  }
`;
