import { configureStore } from '@reduxjs/toolkit';
import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore';
import { connectFunctionsEmulator, getFunctions } from 'firebase/functions';

import authReducer from './slices/authSlice';
import chatReducer from './slices/chatSlice';

import historyReducer from './slices/historySlice';
import onboardingReducer from './slices/onboardingSlice';

import toolHistoryReducer from './slices/toolHistorySlice';
import toolsReducer from './slices/toolsSlice';
import userReducer from './slices/userSlice';

import firebaseConfig from '@/firebase/config';

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const firestore = getFirestore(app);
const functions = getFunctions(app);

// Connect to Firebase Emulators if running locally
// if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
//   connectAuthEmulator(auth, 'http://localhost:9099');
//   connectFirestoreEmulator(firestore, 'localhost', 8080);
//   connectFunctionsEmulator(functions, 'localhost', 5001);
// }

const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    tools: toolsReducer,
    toolHistory: toolHistoryReducer,
    chat: chatReducer,
    onboarding: onboardingReducer,
    history: historyReducer,
  },
});

export { auth, firestore, functions };
export default store;
