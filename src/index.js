import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App";
import * as actionCreators from "./examples/with-redux/actionsCreators";
import {
  todoListReducer,
  activeUserReducer,
} from "./examples/with-redux/reducers";

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
  trace: true, // (action) => { return ‘trace as string’; }
  traceLimit: 25,
});

const composeEnhancers = composeWithDevTools({
  actionCreators,
  trace: true,
  traceLimit: 25,
});

const store = createStore(
  combineReducers({
    list: todoListReducer,
    activeUserReducer: activeUserReducer,
  }),
  composeEnhancers()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
