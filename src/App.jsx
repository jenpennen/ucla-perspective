import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ClubDirectory from "./pages/ClubDirectory";
import Events from "./pages/Events";
import RegisterClub from "./pages/RegisterClub";
import { Layout } from "./Layout";
import Footer from "./components/Footer";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/club-directory" element={<ClubDirectory />} />
          <Route path="/events" element={<Events />} />
          <Route path="/register-club" element={<RegisterClub />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
