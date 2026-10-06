import ojoAvatar from "../assets/locations/district/image1.png";
import akesanAvatar from "../assets/locations/district/image2.png";
import downtownMarker from "../assets/locations/district/downtown-marker.svg";
import hopeMarker from "../assets/locations/district/hope-marker.svg";

import ojoImage from "../assets/locations/branch/image1.png";
import okokoImage from "../assets/locations/branch/image4.png";
import akesanImage from "../assets/locations/branch/image5.png";
import tradeFairImage from "../assets/locations/branch/image4.png";

export const districts = [
  {
    slug: "central",
    name: "Central District",
    branchSlugs: ["ojo-branch", "akesan-branch"],
  },
  {
    slug: "ajegunle",
    name: "Ajegunle District",
    branchSlugs: ["trade-fair-branch"],
  },
  {
    slug: "abeokuta",
    name: "Abeokuta District",
    branchSlugs: [],
  },
];

export const branches = [
  {
    slug: "ojo-branch",
    districtSlug: "central",
    name: "Ojo Branch",
    cardImage: ojoImage,
    addressShort: "1 Alimi Str.",
    addressFull: "1 Alimi Street, Ira Quaters, Ojo, Lagos",
    mapLink: "https://maps.google.com/?q=1+Alimi+Street+Ira+Quaters+Ojo+Lagos",
    heroDescription:
      "A welcoming community in the heart of the city, dedicated to spiritual growth and service.",
    pastorName: "Rev. Dr. J.A Emmanuel",
    pastorRole: "Pastor in Charge - Downtown Sanctuary",
    pastorAvatar: ojoAvatar,
    pastorBio:
      "With over a decade of dedicated service in the central district, Rev. Dr. J.A Emmanuel brings a passionate vision for urban ministry. She focuses on building inclusive communities and fostering genuine spiritual growth through compassionate leadership and community outreach.",
    serviceTimes: [
      { label: "Sunday Worship", time: "7:00 AM - 11:00 AM" },
      { label: "Revival Service (Tues)", time: "6:00 AM" },
      { label: "Bible Study (Thurs)" },
    ],
    upcomingEvent: {
      name: "Thanksgiving Service",
      date: "Nov 05",
      linkTo: "/events/thanksgiving-service",
    },
    ctaVenueName: "Downtown Sanctuary",
    mapMarker: { icon: downtownMarker, left: "27.92%", top: "38.05%" },
  },
  {
    slug: "akesan-branch",
    districtSlug: "central",
    name: "Akesan Branch",
    cardImage: akesanImage,
    addressShort: "31 Akesan Area",
    addressFull: "31 Akesan Area, Lagos",
    pastorName: "Rev. Segun",
    pastorRole: "Pastor in Charge - Akesan Branch",
    pastorAvatar: akesanAvatar,
    pastorBio:
      "Pastor Segun leads the Akesan Branch with a heart for discipleship and community, shepherding the congregation through consistent, scripture-centered teaching.",
    serviceTimes: [{ label: "Sunday Worship", time: "8:00 AM - 11:00 AM" }],
    ctaVenueName: "Akesan Branch",
    mapMarker: { icon: hopeMarker, left: "52.92%", top: "58.05%" },
  },
  {
    slug: "trade-fair-branch",
    districtSlug: "ajegunle",
    name: "Trade-fair Branch",
    cardImage: tradeFairImage,
    addressShort: "890 Grace Blvd",
    addressFull: "890 Grace Blvd, Cityville, ST 12346",
    pastorName: "Rev. Olayide",
    pastorRole: "Pastor in Charge - Trade-fair Branch",
    pastorBio:
      "Pastor Olayide brings warmth and steady leadership to the Trade-fair congregation, with a particular focus on family ministry and outreach.",
    serviceTimes: [{ label: "Sunday Worship", time: "9:00 AM - 12:00 PM" }],
    ctaVenueName: "Trade-fair Branch",
  },
  {
    slug: "okoko-branch",
    districtSlug: "central",
    name: "Okoko Branch",
    cardImage: okokoImage,
    addressShort: "Okoko, Lagos",
    addressFull: "Okoko, Lagos",
    pastorName: "TBD",
    ctaVenueName: "Okoko Branch",
  },
];

export const getDistrictBySlug = (slug) =>
  districts.find((d) => d.slug === slug);

export const getOtherDistricts = (currentSlug) =>
  districts.filter((d) => d.slug !== currentSlug);

export const getBranchesForDistrict = (districtSlug) =>
  branches.filter((b) => b.districtSlug === districtSlug);

export const getBranchBySlug = (slug) =>
  branches.find((b) => b.slug === slug);

/** Branches near the given one — currently just "other branches in the same district", falls back to any other branch */
export const getNearbyBranches = (currentSlug, count = 2) => {
  const current = getBranchBySlug(currentSlug);
  if (!current) return [];

  const sameDistrict = branches.filter(
    (b) => b.slug !== currentSlug && b.districtSlug === current.districtSlug
  );
  const rest = branches.filter(
    (b) => b.slug !== currentSlug && b.districtSlug !== current.districtSlug
  );

  return [...sameDistrict, ...rest].slice(0, count);
};
