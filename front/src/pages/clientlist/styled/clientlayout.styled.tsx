import styled from "styled-components";

export const Clientlayout = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div:nth-child(1) {
    margin-bottom: 20px;
    color: #e6a15c;
    font-size: 35px;
  }

  & > div:nth-child(2) {
    width: 300px;
    height: 35px;
  }

  & > div:nth-child(2) > form {
    width: 300px;
    box-sizing: border-box;
    display: flex;
  }

  & > div:nth-child(2) > form > input {
    width: 280px;
    height: 30px;
    font-size: 17px;
  }

  & > div:nth-child(2) > form > button {
    background-color: #232a3f;
    border: none;
    width: 32px;
    height: 32px;
  }

  & > div:nth-child(2) > form > button > .plus {
    background-position: center;
    background-size: cover;
    width: 32px;
    height: 32px;
    box-sizing: border-box;
    margin-left: 10px;
    padding-top: 5px;
    box-sizing: border-box;
    cursor: pointer;
  }

  & > ul {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 300px;
    height: 240px;
    border-top: 2px solid #e6a15c;
    border-bottom: 2px solid #e6a15c;
    padding: 5px;
    box-sizing: border-box;
    margin-top: 25px;
  }

  & > ul::-webkit-scrollbar {
    display: none;
  }

  & > ul > li {
    width: 300px;
    height: 30px;
    /* border-bottom: 1px solid #8f98b3; */
    padding: 4px;
    box-sizing: border-box;
    margin-bottom: 7px;
    color: #8f98b3;
  }

  & > ul > li > span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 260px;
  }

  & > ul > li > .copy {
    float: right;
    margin-top: 2px;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
  }
`;
