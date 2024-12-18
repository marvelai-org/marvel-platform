import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

const fetchPersonas = createAsyncThunk('personas/fetch', async () => {
  try {
    const db = getFirestore();
    const personasRef = collection(db, 'personas');
    const querySnapshot = await getDocs(personasRef);
    if (querySnapshot.empty) {
      throw new Error('No personas found!');
    }
    const personas = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return personas;
  } catch (err) {
    throw new Error(err);
  }
});

export default fetchPersonas;
