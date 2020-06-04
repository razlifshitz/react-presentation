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

// SIGN IN / OUT
export const signIn = (user) => {
  return {
    type: "SIGN_IN",
    payload: user,
  };
};

export const signOut = () => {
  return {
    type: "SIGN_OUT",
  };
};
