import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  collection,
  getDocs,
  getFirestore,
  orderBy,
  query,
  where,
} from 'firebase/firestore';

/**
 * Async thunk to fetch chat history from Firestore.
 *
 * @param {string} userId The ID of the user whose history is being fetched.
 */
const fetchHistory = createAsyncThunk(
  'history/fetchHistory',
  async (userId) => {
    try {
      // Get the Firestore instance
      const firestore = getFirestore();

      // Create a query to fetch chat sessions for the given user ID
      const histQuery = query(
        collection(firestore, 'chatSessions'),
        where('user.id', '==', userId),
        orderBy('updatedAt', 'desc')
      );

      // Execute the query and retrieve the chat sessions
      const querySnapshot = await getDocs(histQuery);

      // Initialize an empty array to store the chat history
      const history = [];

      // Iterate over the retrieved chat sessions
      querySnapshot.forEach((doc) => {
        // Extract the relevant data from each chat session
        const data = doc.data();
        const { id, createdAt, updatedAt, messages } = data;

        // Create an object to store the chat history for each chat session
        const chatHistory = {
          id,
          // Convert Firestore timestamps to JavaScript Date objects and format as ISO strings
          createdAt: createdAt.toDate().toISOString(),
          updatedAt: updatedAt.toDate().toISOString(),

          // Extract the title of the chat session. If the first message role is 'system', the title is the text of the second message. Otherwise, the title is the text of the first message.
          title:
            // Check if the first message role is 'system'
            messages[0]?.role === 'system'
              ? // If so, extract the text of the second message
                messages[1]?.payload?.text
              : // Otherwise, extract the text of the first message
                messages[0]?.payload?.text,
        };

        // Add the chat history object to the history array
        history.push(chatHistory);
      });

      // Return the fetched chat history
      return history;
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error fetching history:', error);
      throw new Error(error);
    }
  }
);

export default fetchHistory;
