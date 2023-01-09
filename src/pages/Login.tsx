import React, { useRef } from 'react';

interface IProps {
  onLoginHandler: (password: string) => void;
}

const Login = ({ onLoginHandler }: IProps) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLoginHandler(passwordRef.current!.value);
  };
  return (
    <form onSubmit={submitHandler}>
      <input
        type='password'
        placeholder='비밀번호를 입력하세요'
        ref={passwordRef}
      />
      <button>로그인</button>
    </form>
  );
};

export default Login;
