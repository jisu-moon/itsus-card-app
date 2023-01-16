import styled from 'styled-components';

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  background: #f1f1f1;
  box-sizing: border-box;
  padding: 10px 20px;
  & > div {
    display: flex;
    align-items: center;
    gap: 20px;
    p {
      font-size: 24px;
      font-weight: bold;
    }
  }
`;
