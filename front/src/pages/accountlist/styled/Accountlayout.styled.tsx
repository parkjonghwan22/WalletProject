import styled from "styled-components";

export const Accountlayout = styled.div`
  margin: 40px auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  & > div:nth-child(1) {
    color: #e6a15c;
    font-size: 35px;
  }

  & > div:nth-child(2) {
    margin-top: 20px;
    color: #8f98b3;
  }

  & > div:nth-child(2) > ul {
    overflow: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    width: 300px;
    height: 320px;
    border-top: 2px solid #e6a15c;
    border-bottom: 2px solid #e6a15c;
    padding: 5px;
    box-sizing: border-box;
  }

  & > div:nth-child(2) > ul::-webkit-scrollbar {
    display: none;
  }

  & > div:nth-child(2) > ul > li {
    width: 300px;
    height: 30px;
    /* border-bottom: 1px solid #8f98b3; */
    padding: 4px;
    box-sizing: border-box;
    margin-bottom: 7px;
  }

  & > div:nth-child(2) > ul > li > a {
    overflow: hidden;
    text-overflow: ellipsis;
    display: inline-block;
    width: 260px;
    color: #8f98b3;
  }

  & > div:nth-child(2) > ul > li > .copy {
    float: right;
    cursor: pointer;
    background-position: center;
    background-size: cover;
    width: 20px;
    height: 20px;
    box-sizing: border-box;
  }
`;
