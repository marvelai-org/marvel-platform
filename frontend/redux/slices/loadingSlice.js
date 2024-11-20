import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setGlobalLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setGlobalLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
