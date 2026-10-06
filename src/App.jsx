import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Home/Navbar";
import Footer from "./components/Home/Footer";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Givenow from "./pages/Givenow";
import Locations from "./pages/Locations";
import District from "./pages/District";
import Branch from "./pages/Branch";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F9FF]">
      <Navbar />
      {/* Top padding clears the fixed header (81px desktop, 64px mobile via --header-height) */}
      <main
        className="flex-1"
        style={{ paddingTop: "var(--header-height, 81px)" }}
      >
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
      <Footer />
    </div>
  );
};

export default App;
