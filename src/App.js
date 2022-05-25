import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import AbouticonLink from "./components/AbouticonLink";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

import { FeedbackProvider } from "./context/FeedbackContext";

export default function App() {
  return (
    <>
      <FeedbackProvider>
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
        <AbouticonLink />
      </FeedbackProvider>
    </>
  );
}
