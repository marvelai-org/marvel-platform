// import { initializeApp } from 'firebase/app';
// import { getDatabase } from 'firebase/database'; // this is for Firebase Realtime Database
// //import { getAuth } from 'firebase/auth'; // if you're using Firebase Authentication
// //import { getFirestore } from 'firebase/firestore'; // if you're using Firestore


// paste your firebase config object here
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_STORAGE_BUCKET,
  appId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase services (Authentication, Database, Firestore, etc.)
//const auth = getAuth(app);  // Firebase Authentication
// const database = getDatabase(app);  // Firebase Realtime Database
//const firestore = getFirestore(app); // Firestore

// stop editing below this
export default firebaseConfig;
