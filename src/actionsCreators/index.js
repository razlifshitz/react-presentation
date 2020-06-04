export const createNewTodo = (text, user) => {
  return {
    type: "CREATE_TODO",
    payload: { user, text },
  };
};

export const deleteTodo = (id, user) => {
  return {
    type: "DELETE_TODO",
    payload: { id, user },
  };
};
