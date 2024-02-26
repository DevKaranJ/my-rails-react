// app/javascript/reducers/greetingSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: null,
  },
  reducers: {
    setGreeting: (state, action) => {
      state.greeting = action.payload;
    },
  },
});

export const { setGreeting } = greetingSlice.actions;

export default greetingSlice.reducer;
