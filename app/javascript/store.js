// app/javascript/store.js
import { createStore } from 'redux';
import { fetchGreeting } from './actions';

const initialState = {
  greeting: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GREETING':
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;