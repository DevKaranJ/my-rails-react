// app/javascript/actions/greetingActions.js
import axios from 'axios';
import { setGreeting } from '../reducers/greetingSlice';

export const fetchRandomGreeting = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/index');
    dispatch(setGreeting(response.data.greeting));
  } catch (error) {
    console.error('Error fetching random greeting:', error);
  }
};
