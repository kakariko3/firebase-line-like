import { Button } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';

import { auth } from '../firebase';

export const SignOut = () => {
  return (
    <div className="header">
      <Button style={{ color: 'white', fontSize: '15px' }} onClick={() => auth.signOut()}>
        サインアウト
      </Button>
      <h3>{auth.currentUser!.displayName}</h3>
      <CallIcon />
    </div>
  );
};
