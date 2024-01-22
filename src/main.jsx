import React from "react";
import ReactDOM from "react-dom"; // 수정된 부분: react-dom/client 대신 react-dom 사용
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
