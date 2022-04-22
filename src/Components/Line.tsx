import { useEffect, useState } from 'react';
import { collection, DocumentData, limit, onSnapshot, orderBy, query } from 'firebase/firestore';

import { db, auth } from '../firebase';
import { SignOut } from './SignOut';
import { SendMessage } from './SendMessage';

export const Line = () => {
  const [messages, setMessages] = useState<DocumentData[]>([]);

  useEffect(() => {
    if (!db) return;
    // メッセージを全件取得
    const messagesCollectionRef = collection(db, 'messages');
    const q = query(messagesCollectionRef, orderBy('createdAt'), limit(50));
    const unsub = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });

    // クリーンアップ関数
    return () => unsub();
  }, []);

  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages.map(({ id, text, photoURL, uid }) => (
          <div key={id}>
            <div className={`msg ${uid === auth.currentUser!.uid ? 'sent' : 'received'}`}>
              <img src={photoURL} alt="" />
              <p>{text}</p>
            </div>
          </div>
        ))}
      </div>
      <SendMessage />
    </div>
  );
};
