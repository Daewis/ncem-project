import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProgramsPage from './pages/ProgramsPage';
import ProgramDetailPage from './pages/ProgramDetailPage';
import LocationsPage from './pages/LocationsPage';
import DistrictPage from './pages/DistrictPage';
import BranchPage from './pages/BranchPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/programs/:slug" element={<ProgramDetailPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/:districtSlug" element={<DistrictPage />} />
        <Route path="/locations/:districtSlug/:branchSlug" element={<BranchPage />} />
      </Routes>
    </BrowserRouter>
  );
}