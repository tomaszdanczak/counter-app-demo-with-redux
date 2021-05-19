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
    default:
      return state;
  }
};

export default counterReducer;
