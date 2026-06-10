import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Submissions from "./pages/Submissions";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submissions" element={<Submissions />} />
      </Routes>
    </>
  );
}

export default App;