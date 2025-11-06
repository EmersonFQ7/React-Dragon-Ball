import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import HomePage from "./pages/HomePage";
import EntitiesPage from "./pages/EntitiesPage";

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/entities" element={<EntitiesPage />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
