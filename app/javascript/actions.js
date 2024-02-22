// app/javascript/actions.js
export const fetchGreeting = () => {
    return async (dispatch) => {
      const response = await fetch('/api/index');
      const data = await response.json();
      dispatch({ type: 'FETCH_GREETING', payload: data.greeting });
    };
  };