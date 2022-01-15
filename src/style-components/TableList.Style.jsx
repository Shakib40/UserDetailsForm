import styled from "styled-components";
export const Div = styled.div`
  border: 2px solid #dcdcdc;
  width: 50vw;
  padding: 10px;
  & div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #dcdcdc;
    padding: 0 5px;
    & img {
      width: 60px;
      height: 60px;
    }
  }
`;
