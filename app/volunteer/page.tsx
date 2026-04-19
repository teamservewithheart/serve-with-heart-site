"use client";
import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";
import {
  MapPin,
  Clock,
  Users,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Filter,
} from "lucide-react";

type Org = {
  id: number;
  name: string;
  area: string;
  address: string;
  mapsUrl: string;
  description: string;
  focus: string[];
  ageRequirement: string;
  hours: string;
  website: string;
};

const organizations: Org[] = [
  {
    id: 1,
    name: "Front Steps (ARCH)",
    area: "Austin",
    address: "500 E 7th St, Austin, TX 78701",
    mapsUrl: "https://maps.google.com/?q=500+E+7th+St,+Austin,+TX+78701",
    description:
      "Front Steps operates the Austin Resource Center for the Homeless (ARCH) — the city's largest emergency shelter — providing meals, case management, street outreach, and transitional housing support.",
    focus: ["Emergency Shelter", "Meal Service", "Street Outreach", "Case Management"],
    ageRequirement: "16+ (14–15 with adult supervisor); 18+ for overnight shelter programs",
    hours: "Mon–Sat 7:00 AM – 7:00 PM; limited Sunday availability",
    website: "https://frontsteps.org",
  },
  {
    id: 2,
    name: "Mobile Loaves & Fishes",
    area: "Austin",
    address: "9301 Hog Eye Rd, Austin, TX 78724",
    mapsUrl: "https://maps.google.com/?q=9301+Hog+Eye+Rd,+Austin,+TX+78724",
    description:
      "MLF runs mobile truck routes delivering food and supplies to homeless communities across Austin and operates Community First! Village — a 51-acre master-planned permanent community for the chronically homeless.",
    focus: ["Mobile Food Trucks", "Community First! Village", "Permanent Housing"],
    ageRequirement: "10+ with parent/guardian for truck ministry; 18+ for Community First! Village and solo volunteering",
    hours: "Truck routes Tue–Sun evenings; Community First! Village Mon–Sat 8:00 AM – 5:00 PM",
    website: "https://mlf.org",
  },
  {
    id: 3,
    name: "Caritas of Austin",
    area: "Austin",
    address: "611 Neches St, Austin, TX 78701",
    mapsUrl: "https://maps.google.com/?q=611+Neches+St,+Austin,+TX+78701",
    description:
      "Caritas of Austin provides emergency assistance, transitional housing support, and long-term case management to help individuals and families break the cycle of homelessness.",
    focus: ["Emergency Assistance", "Transitional Housing", "Long-Term Case Management"],
    ageRequirement: "16+ with parental permission form; 18+ for all volunteer programs independently",
    hours: "Mon–Fri 9:00 AM – 4:00 PM",
    website: "https://caritasofaustin.org",
  },
  {
    id: 4,
    name: "The Salvation Army Austin",
    area: "Austin",
    address: "501 E 8th St, Austin, TX 78701",
    mapsUrl: "https://maps.google.com/?q=501+E+8th+St,+Austin,+TX+78701",
    description:
      "The Salvation Army Austin provides emergency shelter, hot meals, transitional housing, and a wide range of social services to homeless individuals and families throughout the Austin area.",
    focus: ["Emergency Shelter", "Hot Meals", "Transitional Housing", "Social Services"],
    ageRequirement: "16+ with parent/guardian; 18+ to volunteer independently",
    hours: "Mon–Sat 9:00 AM – 5:00 PM (program hours vary)",
    website: "https://salvationarmytexas.org/austin",
  },
  {
    id: 5,
    name: "LifeWorks",
    area: "Austin",
    address: "835 W 6th St, Austin, TX 78703",
    mapsUrl: "https://maps.google.com/?q=835+W+6th+St,+Austin,+TX+78703",
    description:
      "LifeWorks provides critical services to youth experiencing homelessness (ages 10–24), including emergency shelter, mental health support, job training, and permanent housing placement.",
    focus: ["Youth Homelessness (ages 10–24)", "Mental Health", "Job Training", "Housing"],
    ageRequirement: "18+ for all volunteer roles",
    hours: "Mon–Fri 9:00 AM – 5:00 PM; flexible scheduling by appointment",
    website: "https://lifeworks.org",
  },
  {
    id: 6,
    name: "Central Texas Food Bank",
    area: "Austin Metro",
    address: "6500 Metropolis Dr, Austin, TX 78744",
    mapsUrl: "https://maps.google.com/?q=6500+Metropolis+Dr,+Austin,+TX+78744",
    description:
      "The Central Texas Food Bank is the region's largest hunger-relief organization, serving 21 counties including Travis, Williamson, Hays, and more — reaching homeless individuals, families, and seniors across Austin, Cedar Park, Leander, Round Rock, and beyond.",
    focus: ["Food Distribution", "Mobile Pantries", "Senior Services", "21-County Coverage"],
    ageRequirement: "16+ (under 16 with parent/guardian); group volunteering available for schools and organizations",
    hours: "Mon–Sat 8:00 AM – 3:30 PM; evening shifts available some days",
    website: "https://centraltexasfoodbank.org",
  },
  {
    id: 7,
    name: "Round Rock Serving Center",
    area: "Round Rock",
    address: "206 N Mays St, Round Rock, TX 78664",
    mapsUrl: "https://maps.google.com/?q=206+N+Mays+St,+Round+Rock,+TX+78664",
    description:
      "The Round Rock Serving Center offers food, clothing, financial assistance, and emergency support to individuals and families in need across the Round Rock area, including those experiencing homelessness.",
    focus: ["Food Pantry", "Clothing Closet", "Emergency Financial Assistance"],
    ageRequirement: "12+ with parent/guardian; 18+ to volunteer independently",
    hours: "Mon, Wed, Fri 9:00 AM – 12:00 PM; Tue & Thu 4:00 PM – 6:30 PM",
    website: "https://rr-sc.org",
  },
  {
    id: 8,
    name: "The Salvation Army Round Rock",
    area: "Round Rock",
    address: "2901 S IH 35, Round Rock, TX 78664",
    mapsUrl: "https://maps.google.com/?q=2901+S+IH+35,+Round+Rock,+TX+78664",
    description:
      "The Salvation Army Round Rock serves homeless individuals and families with emergency shelter referrals, hot meals, transitional assistance, and seasonal programs like Angel Tree and Red Kettle.",
    focus: ["Emergency Shelter Referrals", "Hot Meals", "Transitional Assistance", "Seasonal Programs"],
    ageRequirement: "16+ with parent/guardian; 18+ to volunteer independently",
    hours: "Mon–Fri 9:00 AM – 5:00 PM",
    website: "https://salvationarmytexas.org",
  },
  {
    id: 9,
    name: "The Caring Place",
    area: "Georgetown",
    address: "1100 N Austin Ave, Georgetown, TX 78626",
    mapsUrl: "https://maps.google.com/?q=1100+N+Austin+Ave,+Georgetown,+TX+78626",
    description:
      "The Caring Place serves all of Williamson County — including Cedar Park, Leander, Round Rock, Pflugerville, and Georgetown — with food, clothing, utility assistance, and emergency services for those facing homelessness or housing instability.",
    focus: ["Food Pantry", "Clothing", "Utility Assistance", "Emergency Services"],
    ageRequirement: "16+ with parent permission; 18+ independently; youth groups (12+) with group leader",
    hours: "Mon–Fri 9:00 AM – 3:00 PM; Thu evenings 4:00 PM – 7:00 PM",
    website: "https://thecaringplace.org",
  },
];

const areas = ["All", "Austin", "Austin Metro", "Round Rock", "Georgetown"];

const areaColors: Record<string, string> = {
  Austin: "bg-orange/10 text-orange",
  "Austin Metro": "bg-purple-100 text-purple-700",
  "Round Rock": "bg-blue-100 text-blue-700",
  Georgetown: "bg-green-100 text-green-700",
  Leander: "bg-yellow-100 text-yellow-700",
  "Cedar Park": "bg-pink-100 text-pink-700",
};

function OrgCard({ org }: { org: Org }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-2">
              <span
                className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                  areaColors[org.area] ?? "bg-gray-100 text-gray-600"
                }`}
              >
                {org.area}
              </span>
            </div>
            <h3 className="text-xl font-bold text-navy leading-tight">{org.name}</h3>
          </div>
          <a
            href={org.website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1 text-orange text-sm font-semibold hover:text-orange-dark transition-colors"
          >
            Website <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        <p className="text-navy/70 text-sm leading-relaxed mb-5">{org.description}</p>

        {/* Focus Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {org.focus.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-cream rounded-lg text-xs font-medium text-navy/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Key Info */}
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <Users className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-navy uppercase tracking-wide block mb-0.5">
                Age Requirement
              </span>
              <span className="text-sm text-navy/70">{org.ageRequirement}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-navy uppercase tracking-wide block mb-0.5">
                Hours
              </span>
              <span className="text-sm text-navy/70">{org.hours}</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-semibold text-navy uppercase tracking-wide block mb-0.5">
                Address
              </span>
              <a
                href={org.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-navy/70 hover:text-orange transition-colors underline underline-offset-2"
              >
                {org.address}
              </a>
            </div>
          </div>
        </div>

        {/* Map Toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-5 flex items-center gap-1.5 text-sm text-orange font-semibold hover:text-orange-dark transition-colors"
        >
          {expanded ? (
            <>
              Hide Map <ChevronUp className="h-4 w-4" />
            </>
          ) : (
            <>
              View on Google Maps <ChevronDown className="h-4 w-4" />
            </>
          )}
        </button>
      </div>

      {/* Embedded Map */}
      {expanded && (
        <div className="border-t border-gray-100">
          <iframe
            title={`Map for ${org.name}`}
            width="100%"
            height="260"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(org.address)}&output=embed&z=15`}
            className="block"
          />
          <div className="p-4 bg-cream">
            <a
              href={org.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange hover:text-orange-dark transition-colors"
            >
              <MapPin className="h-4 w-4" />
              Open in Google Maps
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default function VolunteerPage() {
  const [activeArea, setActiveArea] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = organizations.filter((org) => {
    const matchesArea = activeArea === "All" || org.area === activeArea;
    const matchesSearch =
      org.name.toLowerCase().includes(search.toLowerCase()) ||
      org.area.toLowerCase().includes(search.toLowerCase()) ||
      org.description.toLowerCase().includes(search.toLowerCase());
    return matchesArea && matchesSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-28">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <AnimateIn once>
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">
              Volunteer
            </p>
            <h1 className="text-5xl sm:text-6xl font-bold mb-6">
              Volunteer Near You
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              We&apos;ve put together a list of trusted organizations across Austin where you can
              show up and make a real difference right now. Every listing includes age requirements,
              hours, and a map &mdash; so you can find the right fit and get started.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Filters + Cards */}
      <section className="bg-cream min-h-screen py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Search + Area Filter */}
          <AnimateIn once className="mb-10">
            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
              {/* Search */}
              <div className="relative w-full sm:max-w-sm">
                <Filter className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-navy/40" />
                <input
                  type="text"
                  placeholder="Search by name, area, or focus..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white text-navy placeholder:text-gray-400 focus:border-orange focus:outline-none focus:ring-2 focus:ring-orange/20 transition text-sm"
                />
              </div>

              {/* Area Pills */}
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <button
                    key={area}
                    onClick={() => setActiveArea(area)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      activeArea === area
                        ? "bg-orange text-white shadow-md"
                        : "bg-white text-navy border border-gray-200 hover:border-orange hover:text-orange"
                    }`}
                  >
                    {area}
                  </button>
                ))}
              </div>
            </div>
          </AnimateIn>

          {/* Results count */}
          <AnimateIn once className="mb-6">
            <p className="text-navy/60 text-sm">
              Showing <span className="font-semibold text-navy">{filtered.length}</span> organization
              {filtered.length !== 1 ? "s" : ""}
              {activeArea !== "All" ? ` in ${activeArea}` : " across all areas"}
            </p>
          </AnimateIn>

          {/* Cards Grid */}
          {filtered.length === 0 ? (
            <AnimateIn once className="text-center py-20">
              <p className="text-navy/50 text-lg">No organizations found matching your search.</p>
              <button
                onClick={() => { setSearch(""); setActiveArea("All"); }}
                className="mt-4 text-orange font-semibold hover:text-orange-dark transition-colors"
              >
                Clear filters
              </button>
            </AnimateIn>
          ) : (
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map((org, i) => (
                <AnimateIn key={org.id} delay={i * 0.05} once>
                  <OrgCard org={org} />
                </AnimateIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Disclaimer */}
      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <p className="text-navy/50 text-sm leading-relaxed">
            <strong className="text-navy/70">Heads up:</strong> Hours, age requirements, and
            volunteer opportunities may change. Always confirm details directly with each organization
            before visiting. Listings are provided as a community resource.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimateIn once>
            <h2 className="text-4xl font-bold text-white mb-6">
              Can&apos;t Volunteer Right Now?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              A financial donation or supply drive can be just as powerful. Every act of generosity
              helps us serve more people.
            </p>
            <a
              href="/get-involved"
              className="inline-block rounded-full bg-orange px-8 py-4 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-xl"
            >
              Other Ways to Help
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
