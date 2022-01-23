import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./store/reducers/";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
