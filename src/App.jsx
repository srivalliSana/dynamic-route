import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";

function App() {
  return (
    <div>
      {/* Navigation Bar */}
      <nav style={{ padding: "1rem", background: "#f0f0f0" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/about" style={{ marginRight: "1rem" }}>About</Link>
        <Link to="/contact" style={{ marginRight: "1rem" }}>Contact</Link>
        <Link to="/user/1" style={{ marginRight: "1rem" }}>User 1</Link>
        <Link to="/user/2" style={{ marginRight: "1rem" }}>User 2</Link>
      </nav>

      {/* Page Content */}
      <div style={{ padding: "1rem" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
