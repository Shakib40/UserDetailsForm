import styled from "styled-components";

export const Div = styled.div`
  border: 2px solid #dcdcdc;
  box-sizing: border-box;
  width: 30vw;
  padding: 17px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 8px;
  & div {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
  }
  & input,
  select {
    border: 1px solid black;
    outline: none;
    text-align: center;
    height: 36px;
    width: 100%;
  }
  & div:nth-child(5) input {
    border: none;
    height: auto;
    width: 65%;
    display: flex;
    flex-wrap: wrap;
  }
  & #submit_btn {
    background-color: #dcdcdc;
    cursor: pointer;
    font-size: 22px;
    :hover {
      background-color: #c0c0c0;
    }
  }
  & img {
    width: 80px;
    height: 80px;
    margin: auto;
  }
`;
