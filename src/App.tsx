import LandingPage from "pages/LandingPage";
import RegisterationPage from "pages/RegisterationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
