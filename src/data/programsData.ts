
import faithAndMiracleImage from "@/assets/programs/faith-and-miracle.png";
import faithServiceImage from "@/assets/programs/friday-service.png";
import heroGradientBg from "@/assets/programs/gradient.png";

import monthlyBadgeIcon from "@/assets/programs/badge-monthly-icon.svg";

import mensFellowshipImage from "@/assets/programs/mens-service.png";

import wordEncounterImage from "@/assets/programs/iconsRelatedProgram/image1.png";
import nightOfPraiseImage from "@/assets/programs/iconsRelatedProgram/image2.png";
import communityImpactImage from "@/assets/programs/iconsRelatedProgram/image3.png";

import studyIcon from "@/assets/programs/iconsRelatedProgram/icon1.svg";
import worshipIcon from "@/assets/programs/iconsRelatedProgram/icon2.svg";
import outreachIcon from "@/assets/programs/iconsRelatedProgram/icon3.svg";



export interface ServiceDetailItem {
  label: string;
  value: string;
}

export interface UpcomingDateItem {
  month: string;
  day: string;
  title: string;
}

export interface Program {
  slug: string;
  title: string;
  category: "monthly" | "special";
  showInGrid?: boolean;
  featured?: boolean;
  badgeIcon?: string;
  badgeLabel: string;
  frequencyLabel: string;
  timeLabel: string;
  locationLabel: string;
  cardDescription: string;
  cardImage: string;

  tag: string;
  tagIcon: string;

  breadcrumbLabels: string[];
  heroDescription: string;
  heroImage: string;
  heroGradient?: string;

  serviceDetails: ServiceDetailItem[];
  aboutParagraphs?: string[];
  expectations?: string[];
  upcomingDates?: UpcomingDateItem[];
}

export const programsData: Program[] = [
  {
    slug: "faith-and-miracle",
    title: "Faith & Miracle Service",
    category: "monthly",
    showInGrid: true,
    featured: true,
    badgeLabel: "Monthly",
    badgeIcon: monthlyBadgeIcon,
    frequencyLabel: "First Friday of the Month",
    timeLabel: "10:00 PM - 4:00 AM",
    locationLabel: "Camp Ground Main Auditorium",
    cardDescription:
      "Join us for our monthly night of intense worship, prayer, and divine encounters. Experience the power of God in a transformative atmosphere of faith and miracles.",
    cardImage: faithServiceImage,
    tag: "WORSHIP",
    tagIcon: worshipIcon,
    breadcrumbLabels: ["PROGRAMS", "WORSHIP"],
    heroDescription:
      "Experience a powerful evening of divine connection, restorative worship, and miraculous encounters in an atmosphere of pure light and faith.",
    heroImage: heroGradientBg,
    heroGradient: faithAndMiracleImage,
    serviceDetails: [
      { label: "Frequency", value: "First Friday" },
      { label: "Time", value: "10:00 PM - 4:00 AM" },
      { label: "Venue", value: "Main Camp Ground" },
    ],
    aboutParagraphs: [
      "The Faith & Miracle Service is our premier monthly gathering designed for deep spiritual renewal and transformative encounters. Rooted in the belief that divine light shines brightest when we gather in purpose, this service combines intense, spirit-led worship with profound teachings that anchor the soul.",
      "Whether you are seeking physical healing, emotional restoration, or simply a closer walk with faith, this service provides a sacred yet modern space to experience the miraculous. Our dedicated ministry teams are present to pray with you in a dignified, supportive environment.",
    ],
    expectations: [
      "An hour of uninterrupted, high-end acoustic and contemporary worship.",
      "A focused message centering on faith, healing, and modern discipleship.",
      "Dedicated moments for personal prayer and ministerial impartation.",
    ],
    upcomingDates: [
      { month: "NOV", day: "03", title: "First Friday Service" },
      { month: "DEC", day: "01", title: "End of Year Service" },
      { month: "JAN", day: "05", title: "New Year Impartation" },
    ],
  },
  {
    slug: "mens-fellowship",
    title: "Men's Fellowship",
    category: "monthly",
    showInGrid: true,
    badgeLabel: "Monthly",
    frequencyLabel: "Second Friday",
    timeLabel: "6:30 PM - 8:30 PM",
    locationLabel: "Camp Ground Chapel",
    cardDescription:
      "A dedicated time for men to gather, build brotherhood, and grow together in the Word. Focusing on leadership, family, and faith in today's world.",
    cardImage: mensFellowshipImage,
    tag: "FELLOWSHIP",
    tagIcon: studyIcon, 
    breadcrumbLabels: ["PROGRAMS", "FELLOWSHIP"],
    heroDescription:
      "A dedicated time for men to gather, build brotherhood, and grow together in the Word — centered on leadership, family, and faith in today's world.",
    heroImage: mensFellowshipImage,
    serviceDetails: [
      { label: "Frequency", value: "Second Friday" },
      { label: "Time", value: "6:30 PM - 8:30 PM" },
      { label: "Venue", value: "Camp Ground Chapel" },
    ],
    // TODO  aboutParagraphs, expectations, and upcomingDates not written yet for mens fellowship
  },
  {
    slug: "word-encounter",
    title: "Word Encounter",
    category: "monthly",
    showInGrid: false, // not yet laid out on the grid — currently only used in Related Programs
    badgeLabel: "Monthly",
    frequencyLabel: "Every Wednesday",
    timeLabel: "6:00 PM - 7:30 PM",
    locationLabel: "Main Auditorium",
    cardDescription:
      "A deep dive into scripture focusing on practical application for modern believers.",
    cardImage: wordEncounterImage,
    tag: "STUDY",
    tagIcon: studyIcon,
    breadcrumbLabels: ["PROGRAMS", "STUDY"],
    heroDescription:
      "A deep dive into scripture focusing on practical application for modern believers.",
    heroImage: wordEncounterImage,
    // NOTE(Dave): placeholder detail content — this program didn't have a detail page yet.
    serviceDetails: [
      { label: "Frequency", value: "Weekly" },
      { label: "Time", value: "6:00 PM - 7:30 PM" },
      { label: "Venue", value: "Main Auditorium" },
    ],
    aboutParagraphs: [
      "Word Encounter is our midweek Bible study, built around practical, everyday application of scripture rather than abstract theory.",
      "Each session works through a book or theme verse-by-verse, leaving room for questions and discussion.",
    ],
    expectations: [
      "A guided walk through scripture in plain, practical language.",
      "Open Q&A and discussion time.",
      "Take-home study notes for personal reflection during the week.",
    ],
    upcomingDates: [
      { month: "NOV", day: "05", title: "Book of James, Part 3" },
      { month: "NOV", day: "12", title: "Book of James, Part 4" },
    ],
  },
  {
    slug: "night-of-praise",
    title: "Night of Praise",
    category: "special",
    showInGrid: false,
    badgeLabel: "Special",
    frequencyLabel: "Quarterly",
    timeLabel: "7:00 PM - 9:30 PM",
    locationLabel: "Main Auditorium",
    cardDescription:
      "An evening dedicated entirely to uplifting music and collective gratitude.",
    cardImage: nightOfPraiseImage,
    tag: "WORSHIP",
    tagIcon: worshipIcon,
    breadcrumbLabels: ["PROGRAMS", "WORSHIP"],
    heroDescription:
      "An evening dedicated entirely to uplifting music and collective gratitude.",
    heroImage: nightOfPraiseImage,
    serviceDetails: [
      { label: "Frequency", value: "Quarterly" },
      { label: "Time", value: "7:00 PM - 9:30 PM" },
      { label: "Venue", value: "Main Auditorium" },
    ],
    aboutParagraphs: [
      "Night of Praise is a quarterly gathering set apart entirely for worship — no sermon, just an extended time of music, singing, and gratitude.",
      "It's an opportunity to slow down, reflect on the season behind you, and simply give thanks together as a church family.",
    ],
    expectations: [
      "An extended, uninterrupted worship set led by the full praise team.",
      "Moments of open testimony and shared gratitude.",
      "A relaxed, come-as-you-are atmosphere.",
    ],
    upcomingDates: [{ month: "DEC", day: "20", title: "Year-End Night of Praise" }],
  },
  {
    slug: "community-impact",
    title: "Community Impact",
    category: "special",
    showInGrid: false,
    badgeLabel: "Special",
    frequencyLabel: "Monthly Outreach",
    timeLabel: "9:00 AM - 1:00 PM",
    locationLabel: "Varies by location",
    cardDescription:
      "Taking the light of faith into local neighborhoods through practical service.",
    cardImage: communityImpactImage,
    tag: "OUTREACH",
    tagIcon: outreachIcon,
    breadcrumbLabels: ["PROGRAMS", "OUTREACH"],
    heroDescription:
      "Taking the light of faith into local neighborhoods through practical service.",
    heroImage: communityImpactImage,
    serviceDetails: [
      { label: "Frequency", value: "Monthly" },
      { label: "Time", value: "9:00 AM - 1:00 PM" },
      { label: "Venue", value: "Varies by location" },
    ],
    aboutParagraphs: [
      "Community Impact takes our congregation out of the building and into the neighborhoods around each branch — through cleanups, food distribution, and practical support.",
      "It's how we put faith into action, meeting real needs while sharing the love of Christ in tangible ways.",
    ],
    expectations: [
      "A hands-on service project in a local community.",
      "Team-based outreach with clear roles for volunteers.",
      "A short debrief and prayer to close out the day.",
    ],
    upcomingDates: [{ month: "NOV", day: "22", title: "Ojo District Outreach" }],
  },
];

export const getProgramBySlug = (slug: string): Program | undefined =>
  programsData.find((p) => p.slug === slug);

export const getGridPrograms = (): Program[] => programsData.filter((p) => p.showInGrid);

export const getRelatedPrograms = (currentSlug: string, count = 3): Program[] =>
  programsData.filter((p) => p.slug !== currentSlug).slice(0, count);
