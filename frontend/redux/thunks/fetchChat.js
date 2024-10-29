import { createAsyncThunk } from '@reduxjs/toolkit';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

/**
 * Async thunk to fetch a chat session from Firestore.
 *
 * @param {string} chatId The ID of the chat session to fetch.
 */
const fetchChat = createAsyncThunk('chat/fetchChat', async (chatId) => {
  try {
    // Get the Firestore instance
    const firestore = getFirestore();

    // Get the document reference for the chat session
    const docID = doc(firestore, 'chatSessions', chatId);

    // Retrieve the chat session data from the document
    const chatSessionRef = await getDoc(docID);
    const chatSession = chatSessionRef.data();

    // Convert Firestore timestamps to JavaScript Date objects and format as ISO strings
    chatSession.createdAt = chatSession.createdAt.toDate().toISOString();
    chatSession.updatedAt = chatSession.updatedAt.toDate().toISOString();

    // Return the fetched chat session
    return chatSession;
  } catch (error) {
    throw new Error(error);
  }
});

export default fetchChat;
