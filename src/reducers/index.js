let newId = 0;
export const todoListReducer = (
  state = [
    { id: -1, text: "Eat", user: "matan" },
    { id: -2, text: "Code", user: "raz" },
    { id: -3, text: "Sleep", user: "raz" },
  ],
  action
) => {
  switch (action.type) {
    case "CREATE_TODO":
      const { text, user } = action.payload;
      return state.concat({ id: ++newId, text: text, user: user });
    case "DELETE_TODO":
      const { id } = action.payload;
      return state.filter((el) => el.id !== id);
    default:
      return state;
  }
};

export const activeUserReducer = (state = null, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return action.payload;
    case "SIGN_OUT":
      return null;
    default:
      return state;
  }
};
