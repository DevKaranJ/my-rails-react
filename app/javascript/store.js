import { configureStore } from '@reduxjs/toolkit';
import greetingReducer from './reducers/greetingSlice';

export default configureStore({
  reducer: {
    greeting: greetingReducer,
  },
});
