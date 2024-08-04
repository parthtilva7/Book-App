// firebaseConfig.js
import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDARYzwOH_VvGPPvZ1ug3wPayu8KLNfZoc',
  authDomain: 'bookapp-1344f.firebaseapp.com',
  databaseURL: 'https://bookapp-1344f-default-rtdb.firebaseio.com',
  projectId: 'bookapp-1344f',
  storageBucket: 'bookapp-1344f.appspot.com',
  messagingSenderId: '981146163523',
  appId: '1:981146163523:web:6d42f1a6779c24c1e577f6',
  measurementId: 'G-DLWM7797VY',
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export {db};
