import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./redux/reducers";

// const initialState = {
//   color: "red",
//   bgColor: "red",
//   fontsize: 14,
//   text: "Init text",
//   spans: [{ color: "blue", bgcolor: "green", fontsize: 20, text: "Hello world", id:new Date().valueOf()}]
// }

// function spans(state = initialState, action) {
//   if (action.type == "ADD_SPAN") {
//     console.log("from dispatch ", action.payload);
//     let newSpans = state.spans;
//     newSpans.push(action.payload);
//     return {
//       ...state,
//       spans: newSpans
//     }
//   }
//   return state;
// }

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
});

// store.dispatch({
//   type: "ADD_SPAN",
//   payload: { color: "blue", bgcolor: "green", fontsize: 20, text: "Hello world", id:new Date().valueOf() },
// });

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
