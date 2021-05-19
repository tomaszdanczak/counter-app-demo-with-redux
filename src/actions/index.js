export const reset = () => {
  return {
    type: "RESET",
  };
};

export const increment = (id) => {
  return {
    type: "INCREMENT",
    payload: id,
  };
};

export const deleteCounter = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};
