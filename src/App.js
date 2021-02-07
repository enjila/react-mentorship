import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/index";

export default function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}
