import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    user: undefined,
  },
  reducers: {
    setLogin: (state, action) => {
      state.isLogin = true;
      state.user = action.payload;
    },
  },
});

export const { setLogin } = authSlice.actions;

export default authSlice.reducer;
