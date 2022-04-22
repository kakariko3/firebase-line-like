import { useAuthState } from 'react-firebase-hooks/auth';

import './App.css';
import { auth } from './firebase';
import { SignIn } from './Components/SignIn';
import { Line } from './Components/Line';

export const App = () => {
  const [user] = useAuthState(auth);

  return <div>{user ? <Line /> : <SignIn />}</div>;
};
