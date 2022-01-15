import styled from "styled-components";

export const Div = styled.div`
  border: 2px solid #dcdcdc;
  width: 15vw;
  display: flex;
  flex-direction: column;
  /* align-content: space-between; */
  /* justify-content: center; */
  box-sizing: border-box;
  padding: 5px;
  gap: 15px;
  & div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    border: 1px solid #dcdcdc;
    padding: 5px;
    box-sizing: border-box;
  }
`;
