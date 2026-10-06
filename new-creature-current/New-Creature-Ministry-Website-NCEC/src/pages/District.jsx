import { useParams, Link } from "react-router-dom";
import Footer from "../components/Home/Footer";
import MainContentSection from "../components/Locations/DistrictPage/MainContentSection";
import AccordionSection from "../components/Locations/DistrictPage/AccordionSection";
import {
  getDistrictBySlug,
  getBranchesForDistrict,
  getOtherDistricts,
} from "../data/locationsData";

const DistrictPage = () => {
  const { districtSlug } = useParams();
  const district = districtSlug ? getDistrictBySlug(districtSlug) : undefined;

  if (!district) {
    return (
      <div className="min-h-screen bg-[#F9F9FF] pt-16 lg:pt-20 px-6 py-16 text-center">
        <h1 className="text-2xl font-bold text-blue mb-3">District not found</h1>
        <p className="text-offwhite mb-4">
          We couldn't find the district you're looking for.
        </p>
        <Link
          to="/locations"
          className="inline-flex items-center justify-center bg-blue text-white px-5 py-2.5 rounded-md font-semibold no-underline"
        >
          Back to Locations
        </Link>
        <Footer />
      </div>
    );
  }

  const branches = getBranchesForDistrict(district.slug);
  const otherDistricts = getOtherDistricts(district.slug);

  return (
    <div className="min-h-screen bg-[#F9F9FF] pt-16 lg:pt-20">
      <MainContentSection district={district} branches={branches} />
      <AccordionSection otherDistricts={otherDistricts} />
      <Footer />
    </div>
  );
};

export default DistrictPage;
