import { useState } from 'react';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const [login, setLogin] = useState(false);
  const onLoginHandler = (password: string) => {
    if (password === process.env.REACT_APP_PASSWORD) {
      setLogin(true);
    } else {
      alert('비밀번호를 다시 입력해주세요.');
    }
  };
  return <>{login ? <Main /> : <Login onLoginHandler={onLoginHandler} />}</>;
}

export default App;
