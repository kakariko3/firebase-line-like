// Firebase Javascript SDK v9 (Modular Web SDK)
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: 'AIzaSyC4t_3ljIlo77mWAWj9VMZReE8RLhRIv90',
  authDomain: 'fir-line-like.firebaseapp.com',
  projectId: 'fir-line-like',
  storageBucket: 'fir-line-like.appspot.com',
  messagingSenderId: '832945685075',
  appId: '1:832945685075:web:5e81b0b0ec0c7851233ca6',
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(firebaseApp);

export { auth, db };
