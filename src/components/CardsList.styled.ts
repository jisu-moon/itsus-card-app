import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  background: #f1f1f1;
  box-sizing: border-box;
  padding: 10px 20px;
  & > button {
    width: 100%;
  }
  & > div {
    flex: 0 0 100%;
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-around;
    p {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;
