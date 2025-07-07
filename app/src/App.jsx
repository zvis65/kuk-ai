import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from "./pages/Home";
import Saved from "./pages/Saved";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home/>}
        />
        <Route
          path="/saved"
          element={<Saved/>}
        />
      </Routes>
    </Router>
  );
}

export default App;
