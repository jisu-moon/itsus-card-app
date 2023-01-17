import React, { useRef } from 'react';

import * as S from './Login.styled';

interface IProps {
  onLoginHandler: (password: string) => void;
}

const Login = ({ onLoginHandler }: IProps) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoginHandler(passwordRef.current!.value);
    passwordRef.current!.value = '';
    passwordRef.current!.focus();
  };
  return (
    <S.Wrapper>
      <form onSubmit={submitHandler}>
        <input
          type='password'
          placeholder='비밀번호를 입력하세요'
          ref={passwordRef}
        />
        <button>로그인</button>
      </form>
    </S.Wrapper>
  );
};

export default Login;
