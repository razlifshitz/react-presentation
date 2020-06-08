import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import App from "./App";
import { todoListReducer, activeUserReducer } from "./reducers";

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true, // (action) => { return ‘trace as string’; }
  traceLimit: 25,
});

const store = createStore(
  combineReducers({
    list: todoListReducer,
    activeUserReducer: activeUserReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
