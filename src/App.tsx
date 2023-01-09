import { useState } from 'react';
import Login from './pages/Login';
import Main from './pages/Main';

function App() {
  const [login, setLogin] = useState(true);
  const onLoginHandler = (password: string) => {
    if (password === process.env.REACT_APP_PASSWORD) {
      setLogin(true);
    }
  };
  return <>{login ? <Main /> : <Login onLoginHandler={onLoginHandler} />}</>;
}

export default App;
