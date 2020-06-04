import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import App from "./App";
import { todoListReducer, userTodosCounter } from "./reducers";

const store = createStore(
  combineReducers({
    list: todoListReducer,
    userTodosCount: userTodosCounter,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
