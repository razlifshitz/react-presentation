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

export const userTodosCounter = (state = { raz: 2 }, action) => {
  switch (action.type) {
    case "CREATE_TODO":
      !state[action.payload.user]
        ? (state[action.payload.user] = 1)
        : state[action.payload.user]++;
      return state;
    case "DELETE_TODO":
      state[action.payload.user]--;
      return state;
    default:
      return state;
  }
};
