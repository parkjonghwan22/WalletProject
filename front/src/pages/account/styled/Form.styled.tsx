import styled from "styled-components";

export const Formlayout = styled.div`
  & > form {
    width: 230px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  & > form > input {
    margin-bottom: 15px;
  }

  & > form > button {
    background-color: #232a3f;
    border: none;
    margin-top: 20px;
    cursor: pointer;
  }

  & > form > button > .send {
    background-position: center;
    background-size: cover;
    width: 50px;
    height: 50px;
    box-sizing: border-box;
  }
`;
