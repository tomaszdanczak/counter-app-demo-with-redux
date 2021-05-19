const initialState = {
  counters: [
    { id: 1, value: 4 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ],
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "RESET": {
      const counters = state.counters.map((c) => {
        c.value = 0;
        return c;
      });

      return { ...state, counters };
    }

    case "INCREMENT": {
      const counters = state.counters.map((c) => {
        if (c.id === action.payload) {
          c.value += 1;
          return c;
        }
        return c;
      });

      return { ...state, counters };
    }

    case "DELETE": {
      const counters = state.counters.filter((c) => c.id !== action.payload);

      return { ...state, counters };
    }

    default:
      return state;
  }
};

export default counterReducer;
