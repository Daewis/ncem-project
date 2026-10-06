import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Givenow from "./pages/Givenow";
import Locations from "./pages/Locations";
import District from "./pages/District";
import Branch from "./pages/Branch";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/givenow" element={<Givenow />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:districtSlug" element={<District />} />
          <Route path="/locations/:districtSlug/:branchSlug" element={<Branch />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
