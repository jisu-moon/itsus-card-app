import styled from 'styled-components';

export const CardWrapper = styled.div`
  padding: 20px;
  display: flex;
  background: gray;
  margin-bottom: 20px;
  flex-direction: column;
  gap: 10px;
  max-width: 900px;
  flex: 0 0 80%;
  gap: 10px;
`;

export const Card = styled.div`
  flex: 1 1 30%;
  display: flex;
  justify-content: space-between;
`;
