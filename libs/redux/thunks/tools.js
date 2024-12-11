import { createAsyncThunk } from '@reduxjs/toolkit';
import { collection, getDocs, query } from 'firebase/firestore';

import { firestore } from '@/libs/redux/store';

const fetchTools = createAsyncThunk('tools/fetch', async () => {
  // Query to fetch kai tools
  try {
    const toolsQuery = query(collection(firestore, 'tools'));

    const toolsDocsSnapshot = await getDocs(toolsQuery);

    if (toolsDocsSnapshot.empty) return null;

    const tools = toolsDocsSnapshot.docs?.map((doc) => {
      const { name, ...toolData } = doc.data();
      const maskedToolUrl = name.replace(' ', '-');
      return {
        id: doc?.id,
        name,
        maskedToolUrl,
        ...toolData,
      };
    });

    return tools;
  } catch (error) {
    throw new Error(error);
  }
});

export default fetchTools;
