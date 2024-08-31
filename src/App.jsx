import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ClubDirectory from "./pages/ClubDirectory";
import { Layout } from "./Layout";
function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/ClubDirectory" element={<ClubDirectory />} />
        </Route>
      </Routes>
    </Router>
  );
}
export default App;
