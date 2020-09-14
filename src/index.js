import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";

const initialState = [
  { color: "red", bgcolor: "red", fontsize: 14, text: "Init message", id: new Date().valueOf() }
]

function spans(state = initialState, action) {
  if (action.type == "ADD_SPAN") {
    return [...state, action.payload];
  }
  return state;
}

const store = createStore(spans);

store.subscribe(() => {
  console.log("subscribe ", store.getState());
});

store.dispatch({
  type: "ADD_SPAN",
  payload: { color: "blue", bgcolor: "green", fontsize: 20, text: "Hello world", id: new Date().valueOf() },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
