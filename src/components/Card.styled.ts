import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 20px;
  display: flex;
  background: gray;
  margin-bottom: 20px;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 900px;
  .btn-wrapper {
    button {
      width: 100%;
      border: 0;
      background: #fff;
      padding: 5px;
      font-size: 18px;
    }
  }
`;

export const Card = styled.div`
  flex: 1 1 30%;
  display: flex;
  justify-content: space-between;
`;
