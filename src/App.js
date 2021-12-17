import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gaming from "./pages/Gaming";
import Wellcome from "./pages/Wellcome";

const App = () => {
  const [form, setForm] = useState({
    nickname: "",
    level: "",
  });

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wellcome form={form} setForm={setForm} />} />
        <Route path="/game" element={<Gaming form={form} />} />
      </Routes>
    </Router>
  );
};

export default App;
