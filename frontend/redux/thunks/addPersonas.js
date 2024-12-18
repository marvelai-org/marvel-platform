import { createAsyncThunk } from '@reduxjs/toolkit';

import { addDoc, collection, getDocs, getFirestore } from 'firebase/firestore';

import categorizePersonas from '@/constants/personas';

const addPersonas = createAsyncThunk('personas/add', async () => {
  try {
    const db = getFirestore();
    const personasRef = collection(db, 'personas');
    const querySnapshot = await getDocs(personasRef);
    if (querySnapshot.empty) {
      const addOperations = categorizePersonas.forEach(async (persona) => {
        try {
          const docRef = await addDoc(personasRef, persona);
          return docRef;
        } catch (err) {
          throw new Error('Error adding persona:', err);
        }
      });
      await Promise.all(addOperations);
    }
  } catch (err) {
    throw new Error(err);
  }
});

export default addPersonas;
