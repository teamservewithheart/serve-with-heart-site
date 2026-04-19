import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { Heart, Package, DollarSign, MapPin, ExternalLink, Calendar, Users, Utensils, Instagram } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.74a4.85 4.85 0 0 1-1-.05z" />
    </svg>
  );
}

export const metadata = {
  title: "Get Involved | Serve With Heart",
  description: "Support Serve With Heart through donations, supply drives, and spreading the word.",
};

const dropOffLocations = [
  {
    name: "Central Texas Food Bank",
    address: "6500 Metropolis Dr, Austin, TX 78744",
    mapsUrl: "https://maps.google.com/?q=6500+Metropolis+Dr,+Austin,+TX+78744",
    accepts: "Non-perishable food, canned goods",
    website: "https://centraltexasfoodbank.org",
  },
  {
    name: "The Salvation Army Austin",
    address: "501 E 8th St, Austin, TX 78701",
    mapsUrl: "https://maps.google.com/?q=501+E+8th+St,+Austin,+TX+78701",
    accepts: "Food, hygiene items, clothing, blankets",
    website: "https://salvationarmytexas.org/austin",
  },
  {
    name: "Front Steps (ARCH)",
    address: "500 E 7th St, Austin, TX 78701",
    mapsUrl: "https://maps.google.com/?q=500+E+7th+St,+Austin,+TX+78701",
    accepts: "Hygiene kits, socks, clothing",
    website: "https://frontsteps.org",
  },
  {
    name: "Caritas of Austin",
    address: "611 Neches St, Austin, TX 78701",
    mapsUrl: "https://maps.google.com/?q=611+Neches+St,+Austin,+TX+78701",
    accepts: "Food items, clothing, household supplies",
    website: "https://caritasofaustin.org",
  },
  {
    name: "Mobile Loaves & Fishes",
    address: "9301 Hog Eye Rd, Austin, TX 78724",
    mapsUrl: "https://maps.google.com/?q=9301+Hog+Eye+Rd,+Austin,+TX+78724",
    accepts: "Non-perishable food, hygiene items",
    website: "https://mlf.org",
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <AnimateIn once>
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Get Involved</p>
            <h1 className="text-5xl font-bold mb-6">Support the Mission</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Every bit of support — whether it&apos;s a donation, a supply drop, or a share —
              goes directly toward feeding and serving homeless individuals in Austin.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Financial Support */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Donate</p>
            <h2 className="text-4xl font-bold text-navy mb-4">Financial Support</h2>
            <p className="text-navy/70 max-w-xl mx-auto">
              Your donation goes directly to our GoFundMe — 100% used to fund our work on the ground.
              Here&apos;s exactly what we spend it on:
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-8 mb-14">
            {[
              {
                icon: <Calendar className="h-8 w-8 text-orange" />,
                title: "Community Events",
                desc: "Funding outreach events where we show up, serve meals, and connect directly with homeless individuals in Austin.",
              },
              {
                icon: <Utensils className="h-8 w-8 text-orange" />,
                title: "Food & Donations",
                desc: "Purchasing meals and food items to hand out directly — no middleman, just us making sure people eat.",
              },
              {
                icon: <Users className="h-8 w-8 text-orange" />,
                title: "Growing the Organization",
                desc: "Expanding our reach, onboarding more student volunteers, and building the capacity to serve more people.",
              },
            ].map((card, i) => (
              <AnimateIn key={card.title} delay={i * 0.15} once>
                <div className="bg-white rounded-2xl p-8 shadow-sm h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                  <p className="text-navy/70 leading-relaxed flex-1">{card.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn once className="text-center">
            <a
              href="https://www.gofundme.com/f/servewithheart2026"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-10 py-4 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-xl text-lg"
            >
              <Heart className="h-5 w-5 fill-white" /> Donate on GoFundMe
            </a>
            <p className="mt-4 text-navy/50 text-sm">Secure donation via GoFundMe</p>
          </AnimateIn>
        </div>
      </section>

      {/* Supply Drop-Offs */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Supply Drive</p>
            <h2 className="text-4xl font-bold text-navy mb-4">Local Drop-Off Locations in Austin</h2>
            <p className="text-navy/70 max-w-xl mx-auto">
              Have supplies to donate? These trusted Austin organizations accept food, hygiene items,
              clothing, and more. Drop off directly and your donation goes straight to those who need it.
            </p>
          </AnimateIn>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {dropOffLocations.map((loc, i) => (
              <AnimateIn key={loc.name} delay={i * 0.08} once>
                <div className="bg-cream rounded-2xl p-6 h-full flex flex-col border border-gray-100">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-lg font-bold text-navy leading-tight">{loc.name}</h3>
                    <a
                      href={loc.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0 text-orange hover:text-orange-dark transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="flex items-start gap-2">
                      <MapPin className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
                      <a
                        href={loc.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-navy/70 hover:text-orange transition-colors underline underline-offset-2 leading-snug"
                      >
                        {loc.address}
                      </a>
                    </div>
                    <div className="flex items-start gap-2">
                      <Package className="h-4 w-4 text-orange flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-navy/70">{loc.accepts}</p>
                    </div>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn once className="text-center mt-12">
            <p className="text-navy/60 text-sm max-w-lg mx-auto">
              Always call ahead to confirm current drop-off hours and accepted items before visiting.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Spread the Word */}
      <section className="bg-navy py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimateIn once>
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Spread the Word</p>
            <h2 className="text-4xl font-bold text-white mb-6">Follow &amp; Share Our Story</h2>
            <p className="text-white/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
              Awareness is powerful. Follow us, share our posts, and help us reach more people
              who care about ending hunger and homelessness in Austin.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="https://www.instagram.com/servewithheart2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-orange px-8 py-4 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-xl"
              >
                <Instagram className="h-5 w-5" />
                @servewithheart2026
              </a>
              <a
                href="https://www.tiktok.com/@teamservewithheart"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                <TikTokIcon className="h-5 w-5" />
                @teamservewithheart
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
