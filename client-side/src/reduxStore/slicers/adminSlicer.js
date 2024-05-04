import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  admin:false,
};

export const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    adminAuth: (state, action) => {
      state.admin = action.payload;
    },
  },
});

export const { adminAuth } = adminSlice.actions;

export default adminSlice.reducer;
