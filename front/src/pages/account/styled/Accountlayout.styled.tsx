import styled from "styled-components";

export const Accountlayout = styled.div`
  width: 225px;
  text-align: center;
  margin: 0 auto;

  & > div:nth-child(1) {
    color: #e6a15c;
    font-size: 35px;
    margin-top: 10px;
  }

  & > div:nth-child(2) {
    color: #8f98b3;
    margin-top: 5px;
    font-size: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 225px;
  }

  & > div:nth-child(3) {
    margin-top: 30px;
    margin-bottom: 40px;
    color: #e6a15c;
    font-size: 50px;
  }
`;
