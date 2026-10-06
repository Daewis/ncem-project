import { useParams, Link } from "react-router-dom";
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
      <div className="px-6 py-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
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
      </div>
    );
  }

  const branches = getBranchesForDistrict(district.slug);
  const otherDistricts = getOtherDistricts(district.slug);

  return (
    <div className="bg-[#F9F9FF]">
      <MainContentSection district={district} branches={branches} />
      <AccordionSection otherDistricts={otherDistricts} />
    </div>
  );
};

export default DistrictPage;
