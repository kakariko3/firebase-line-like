import { memo } from 'react';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { Button } from '@mui/material';

import { auth } from '../firebase';

export const SignIn = memo(() => {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <div>
      <Button onClick={signInWithGoogle}>グーグルでログインする</Button>
    </div>
  );
});
