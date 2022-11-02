import LandingPage from "pages/LandingPage";
import RegisterationPage from "pages/RegisterationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/register" element={<RegisterationPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
