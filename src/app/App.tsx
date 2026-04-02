import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import Downloads from "../pages/Downloads";
import Login from "../pages/Login";
import Admin from "../pages/Admin";
import Navbar from "../components/ui/NavBar/Navbar";
import Footer from "../components/ui/Footer/Footer";
import CookieBanner from "../components/CookieBanner/CookieBanner";
import ProtectedRoute from "../components/ProtectedRoute/ProtectedRoute";
import About from "../pages/About";

function AppLayout() {
  const location = useLocation();

  const hideLayout =
    location.pathname === "/admin" || location.pathname === "/login";

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {!hideLayout && <Navbar />}

      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/login" element={<Login />} />

          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
      {!hideLayout && <CookieBanner />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;