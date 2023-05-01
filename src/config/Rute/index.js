import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../../pages";

const Rute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
      </Routes>
    </Router>
  );
};

export default Rute;
