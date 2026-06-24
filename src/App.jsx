import { BrowserRouter, Route, Routes } from "react-router-dom";
import CaseStudyPage from "./pages/CaseStudyPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-study/:projectSlug" element={<CaseStudyPage />} />
        <Route path="/:projectSlug/case-study" element={<CaseStudyPage />} />
      </Routes>
    </BrowserRouter>
  );
}
