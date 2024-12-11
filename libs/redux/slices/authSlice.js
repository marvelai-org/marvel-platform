import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setEmailVerified: (state, action) => {
      if (state.data) state.data.emailVerified = action.payload;
    },
    setClaims: (state, action) => {
      if (state.data) state.data.claims = action.payload;
    },
    setTotalUsers: (state, action) => {
      if (state.data) state.data.totalUsers = action.payload;
    },
  },
});

export const {
  setLoading,
  setUser,
  setEmailVerified,
  setTotalUsers,
  setClaims,
} = authSlice.actions;

export default authSlice.reducer;
