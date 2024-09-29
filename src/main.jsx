import ReactDOM from "react-dom/client";
import App from "./App";
import { store } from "./store.js";
import { Provider } from "react-redux";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ToastContainer position="top-center" autoClose={2000} />
    <App />
  </Provider>
);
