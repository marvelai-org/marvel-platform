import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query, where } from 'firebase/firestore';

import { firestore } from '@/libs/redux/store';

export const fetchToolHistory = createAsyncThunk(
  'toolHistory/fetchToolHistory',
  async (_, { getState, rejectWithValue }) => {
    try {
      const {
        auth: {
          data: { uid },
        },
      } = getState();

      if (!uid) throw new Error('User Id is not available');

      const toolSessionSnapshot = query(
        collection(firestore, 'toolSessions'),
        where('userId', '==', uid)
      );

      const querySnapshot = await getDocs(toolSessionSnapshot);

      if (querySnapshot.empty) throw new Error('No tool sessions found');

      const outputData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      return outputData;
    } catch (error) {
      return rejectWithValue(error?.message || 'Unable to fetch tool history');
    }
  }
);
