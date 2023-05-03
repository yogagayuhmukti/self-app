import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage, CurriculumVitae, Portofolio } from "../../pages";

const Rute = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>} />
        <Route
          path="/curriculumvitae"
          element={<CurriculumVitae></CurriculumVitae>}
        />
        <Route path="/portofolio" element={<Portofolio></Portofolio>} />
      </Routes>
    </Router>
  );
};

export default Rute;
