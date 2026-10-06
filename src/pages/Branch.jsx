import { useParams, Link } from "react-router-dom";
import HeroSection from "../components/Locations/BranchPage/HeroSection";
import MainContentSection from "../components/Locations/BranchPage/MainContentSection";
import OtherChurchesSection from "../components/Locations/BranchPage/OtherChurchesSection";
import CTASection from "../components/Locations/BranchPage/CTASection";
import {
  getBranchBySlug,
  getDistrictBySlug,
  getNearbyBranches,
} from "../data/locationsData";

const BranchPage = () => {
  const { districtSlug, branchSlug } = useParams();

  const branch = branchSlug ? getBranchBySlug(branchSlug) : undefined;
  const district = branch ? getDistrictBySlug(branch.districtSlug) : undefined;

  if (!branch || !district) {
    return (
      <div className="px-6 py-16 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-blue mb-3">Branch not found</h1>
        <p className="text-offwhite mb-4">
          We couldn't find the branch you're looking for.
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

  const nearbyBranches = getNearbyBranches(branch.slug, 2);

  return (
    <div className="bg-[#F9F9FF]">
      <div className="flex flex-col w-full self-stretch items-center gap-12 lg:gap-24 pb-16 lg:pb-[120px]">
        <HeroSection branch={branch} districtName={district.name} />
        <MainContentSection branch={branch} />
        <OtherChurchesSection currentDistrict={district} nearbyBranches={nearbyBranches} />
        <div className="w-full max-w-7xl mx-auto px-4 lg:px-6">
          <CTASection branch={branch} />
        </div>
      </div>
    </div>
  );
};

export default BranchPage;
