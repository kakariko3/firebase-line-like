import { FormEvent, useEffect, useState } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { User } from 'firebase/auth';
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

import { db, auth } from '../firebase';

export const SendMessage = () => {
  const [currentUser, setCurrentUser] = useState<User>();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // ログインユーザーの取得
    const unsub = auth.onAuthStateChanged((user) => {
      if (user) setCurrentUser(user);
    });

    return () => unsub();
  }, []);

  const sendMessage = (evt: FormEvent) => {
    evt.preventDefault();

    // ドキュメントの追加
    const messagesCollectionRef = collection(db, 'messages');
    const documentRef = addDoc(messagesCollectionRef, {
      text: message,
      uid: currentUser?.uid,
      photoURL: currentUser?.photoURL,
      createdAt: serverTimestamp(),
    });
    console.log(documentRef);

    // 入力フォームを空にする
    setMessage('');
  };

  return (
    <div>
      <form onSubmit={sendMessage}>
        <div className="sendMsg"></div>
        <Input
          style={{
            width: '78%',
            fontSize: '15px',
            fontWeight: '550',
            marginLeft: '5px',
            marginBottom: '-3px',
          }}
          type="text"
          placeholder="メッセージを入力してください"
          value={message}
          onChange={(evt) => setMessage(evt.target.value)}
        />
        <SendIcon style={{ color: '#7AC2FF', marginLeft: '20px' }} />
      </form>
    </div>
  );
};
