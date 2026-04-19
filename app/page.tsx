import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { Heart, Users, HandHeart, ArrowRight, Megaphone, Calendar, Utensils } from "lucide-react";

const stats = [
  { value: "30+", label: "Meals Donated to Date" },
  { value: "7+", label: "Student Volunteers" },
  { value: "$0", label: "Cost to Those We Serve" },
  { value: "100%", label: "Youth-Led" },
];

const photos = [
  "/images/618720800_17846309661670324_2456509979080549696_n.jpg",
  "/images/618808721_17846309583670324_7652664320948850511_n.jpg",
  "/images/619581100_17846309634670324_1943955190003904023_n.jpg",
  "/images/619777867_17846309670670324_4832650059086895_n.jpg",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/hero-pattern.svg')" }}
        />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white">
          <AnimateIn once>
            <div className="inline-flex items-center gap-2 rounded-full bg-orange/20 border border-orange/30 px-4 py-1.5 mb-6">
              <Heart className="h-4 w-4 text-orange fill-orange" />
              <span className="text-sm font-medium text-orange">Serving Austin Since 2021</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight mb-6">
              Serve With{" "}
              <span className="text-orange">Heart</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed">
              We believe every person deserves dignity, compassion, and community. Join us in
              serving Austin&apos;s homeless and underserved neighbors across the greater metro area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/volunteer"
                className="rounded-full bg-orange px-8 py-4 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-xl hover:scale-105"
              >
                Find Volunteer Opportunities
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Donate Now
              </Link>
            </div>
          </AnimateIn>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="h-8 w-0.5 bg-white/30 mx-auto" />
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1} once className="text-center">
                <p className="text-4xl font-bold text-white mb-1">{stat.value}</p>
                <p className="text-white/80 text-sm">{stat.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn once direction="left">
              <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Our Mission</p>
              <h2 className="text-4xl font-bold text-navy mb-6 leading-tight">
                Bringing Hope to Those Who Need It Most
              </h2>
              <p className="text-navy/70 leading-relaxed mb-6">
                Serve With Heart is a student-led organization dedicated to helping homeless individuals
                in Austin. We show up with meals, supplies, and a genuine desire to connect — because
                every person deserves to feel seen, valued, and cared for.
              </p>
              <p className="text-navy/70 leading-relaxed mb-8">
                We&apos;re a small but growing team of young people who believe that showing up for
                your neighbors isn&apos;t optional — it&apos;s just the right thing to do.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
              >
                Learn more about us <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimateIn>

            <AnimateIn once direction="right">
              <div className="grid grid-cols-2 gap-4">
                {photos.slice(0, 4).map((src, i) => (
                  <div
                    key={i}
                    className={`overflow-hidden rounded-2xl shadow-lg ${i === 1 ? "mt-8" : ""}`}
                  >
                    <Image
                      src={src}
                      alt={`Community photo ${i + 1}`}
                      width={300}
                      height={300}
                      className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Our Goals */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">What We&apos;re Working Toward</p>
            <h2 className="text-4xl font-bold text-navy">Our Goals</h2>
            <p className="text-navy/60 mt-4 max-w-xl mx-auto">We&apos;re a youth-led group with a focused mission. Here&apos;s what we&apos;re actively working on.</p>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Utensils className="h-8 w-8 text-orange" />,
                title: "Distribute Food",
                desc: "Purchase and hand out meals directly to homeless individuals in our community — no middleman, no barriers. Just food and a friendly face.",
              },
              {
                icon: <Megaphone className="h-8 w-8 text-orange" />,
                title: "Raise Awareness",
                desc: "Help our neighbors understand the reality of local poverty and homelessness so more people feel moved to take action.",
              },
              {
                icon: <Calendar className="h-8 w-8 text-orange" />,
                title: "Organize Outreach Events",
                desc: "Plan and run community events where we can directly connect with and serve those experiencing homelessness in Austin.",
              },
            ].map((card, i) => (
              <AnimateIn key={card.title} delay={i * 0.15} once>
                <div className="bg-cream rounded-2xl p-8 h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                  <p className="text-navy/70 leading-relaxed flex-1">{card.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-12">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Events</p>
            <h2 className="text-4xl font-bold text-navy">Upcoming Outreach Events</h2>
          </AnimateIn>
          <AnimateIn once>
            <div className="bg-white rounded-2xl p-10 text-center shadow-sm border border-gray-100 max-w-lg mx-auto">
              <Calendar className="h-12 w-12 text-orange mx-auto mb-4" />
              <h3 className="text-xl font-bold text-navy mb-3">Next Event Coming Soon</h3>
              <p className="text-navy/70 mb-6">
                Follow us on Instagram to be the first to know about our next community outreach event — where we&apos;ll be, what we&apos;re doing, and how you can join us.
              </p>
              <a
                href="https://www.instagram.com/servewithheart2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-orange px-6 py-3 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-lg"
              >
                Follow @servewithheart2026
              </a>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* How to Help */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Get Involved</p>
            <h2 className="text-4xl font-bold text-navy">Ways to Make a Difference</h2>
          </AnimateIn>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <HandHeart className="h-8 w-8 text-orange" />,
                title: "Volunteer",
                desc: "Join our team in serving meals, distributing supplies, and connecting with community members in need.",
                href: "/volunteer",
                cta: "Find opportunities",
              },
              {
                icon: <Heart className="h-8 w-8 text-orange" />,
                title: "Donate",
                desc: "Your financial contribution helps us purchase food, hygiene kits, blankets, and essential supplies.",
                href: "/get-involved",
                cta: "Donate now",
              },
              {
                icon: <Users className="h-8 w-8 text-orange" />,
                title: "Spread the Word",
                desc: "Share our mission with your family, school, and social networks to amplify our community impact.",
                href: "/contact",
                cta: "Connect with us",
              },
            ].map((card, i) => (
              <AnimateIn key={card.title} delay={i * 0.15} once>
                <div className="bg-cream rounded-2xl p-8 h-full flex flex-col hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-xl bg-orange/10 flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{card.title}</h3>
                  <p className="text-navy/70 leading-relaxed flex-1 mb-6">{card.desc}</p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 text-orange font-semibold text-sm hover:gap-3 transition-all"
                  >
                    {card.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <AnimateIn once>
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-white/70 mb-10 text-lg">
              Every meal served, every supply distributed, every smile shared matters.
              Join the Serve With Heart family today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/volunteer"
                className="rounded-full bg-orange px-8 py-4 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-xl"
              >
                Volunteer Near You
              </Link>
              <Link
                href="/get-involved"
                className="rounded-full border-2 border-white/30 px-8 py-4 font-semibold text-white hover:bg-white/10 transition-all"
              >
                Support Our Mission
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
