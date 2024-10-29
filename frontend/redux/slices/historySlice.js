import { createSlice } from '@reduxjs/toolkit';

import fetchHistory from '../thunks/fetchHistory';

/**
 * Slice for managing the user's chat history.
 */
const historySlice = createSlice({
  name: 'history',
  initialState: {
    history: [], // The user's chat history.
    historyLoaded: false, // Indicates whether the history has been loaded from the server.
    error: null, // Error message indicating a failure to fetch history.
  },
  reducers: {
    /**
     * Updates a chat history entry in the state's history array.
     */
    updateHistoryEntry: (state, action) => {
      // Destructure the payload object from the action
      const { id, updatedAt } = action.payload;

      // Find the index of the chat history entry with the matching ID
      const index = state.history.findIndex((item) => item.id === id);

      // If a matching chat history entry is found
      if (index !== -1) {
        // Store a reference to the old chat history data
        const oldHistoryData = state.history[index];

        // Remove the old chat history entry from the history array
        state.history.splice(index, 1);

        // Add a new chat history entry to the beginning of the history array with the updated timestamp
        state.history.unshift({ ...oldHistoryData, updatedAt });
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending, (state) => {
        state.historyLoaded = false;
        state.error = null;
      })
      .addCase(fetchHistory.fulfilled, (state, action) => {
        state.historyLoaded = true;
        state.history = action.payload;
        state.error = null;
      })
      .addCase(fetchHistory.rejected, (state) => {
        state.historyLoaded = true;
        state.error = 'Could not fetch history. Please try again.';
      });
  },
});

export const { updateHistoryEntry } = historySlice.actions;

export default historySlice.reducer;
