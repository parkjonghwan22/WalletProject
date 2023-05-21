import styled from "styled-components";

export const Choicelayout = styled.div`
  width: 300px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > a {
    width: 170px;
    height: 60px;
    border-radius: 10px;
    border: 2px solid #e6a15c;
    background-color: #232a3f;
    color: #e6a15c;
    font-size: 20px;
    cursor: pointer;
    text-align: center;
    line-height: 60px;
    margin-top: 100px;
  }

  & > a:hover {
    background-color: #e6a15c;
    color: black;
  }
`;
