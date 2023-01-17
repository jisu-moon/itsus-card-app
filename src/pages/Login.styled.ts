import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    background: gray;
    padding: 100px 0px;
    * {
      height: 50px;
      box-sizing: border-box;
      width: 100%;
      max-width: 200px;
    }
  }
`;
