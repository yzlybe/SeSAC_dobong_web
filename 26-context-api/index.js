import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

function reducer(numberState, action) {
  if (action.type === "증가") {
    return ++numberState;
  } else if (action.type === "감소") {
    return --numberState;
  } else {
    return numberState;
  }
}

const store = configureStore({});
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
