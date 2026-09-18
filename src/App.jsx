import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import PageNotFound from "./lib/PageNotFound";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<Home />} />

        {/* Página não encontrada */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}