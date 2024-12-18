import { createSlice } from '@reduxjs/toolkit';

import fetchPersonas from '../thunks/fetchPersona';

const personasSlice = createSlice({
  name: 'personas',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPersonas.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPersonas.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPersonas.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPersonas } = personasSlice.actions;
export default personasSlice.reducer;
