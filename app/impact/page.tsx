import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { ArrowRight } from "lucide-react";

export const metadata = {
  title: "Our Impact | Serve With Heart",
  description: "See the real-world difference Serve With Heart is making in the Austin community.",
};

const milestones = [
  { year: "01", title: "Donated 30+ Meals", desc: "We personally purchased and distributed over 30 meals to homeless individuals in Austin. Every single meal came with a conversation and a real human connection." },
  { year: "02", title: "Built Our Volunteer Team", desc: "Seven dedicated students came together with one shared goal: show up for their community. Our team is small, but everyone who joins brings heart." },
  { year: "03", title: "Organized Outreach Events", desc: "We've taken our mission to the streets, connecting directly with unhoused people in Austin — distributing food and raising awareness in the community." },
  { year: "04", title: "Spreading the Word", desc: "We've started real conversations about local poverty and homelessness — at school, online, and in our neighborhoods — to inspire others to care and act." },
];

const stats = [
  { value: "30+", label: "Meals donated to date" },
  { value: "7+", label: "Student volunteers" },
  { value: "$0", label: "Cost to those we serve" },
  { value: "100%", label: "Youth-led" },
];

export default function ImpactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <AnimateIn once>
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Our Impact</p>
            <h1 className="text-5xl font-bold mb-6">Real Change, Real People</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Every number represents a life touched — a meal received, a supply given, a moment of
              connection that says &quot;you matter.&quot;
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {stats.map((s, i) => (
              <AnimateIn key={s.label} delay={i * 0.1} once className="text-center">
                <p className="text-5xl font-bold text-white mb-2">{s.value}</p>
                <p className="text-white/80">{s.label}</p>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-4xl px-4">
          <AnimateIn once className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">What We&apos;ve Done</p>
            <h2 className="text-4xl font-bold text-navy">Our Accomplishments</h2>
          </AnimateIn>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange/30" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <AnimateIn key={m.year} delay={i * 0.1} once direction="left">
                  <div className="flex gap-8 items-start">
                    <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-orange flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-sm">{m.year}</span>
                    </div>
                    <div className="pt-3">
                      <h3 className="text-xl font-bold text-navy mb-2">{m.title}</h3>
                      <p className="text-navy/70 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Goals */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-4">
          <AnimateIn once className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Looking Ahead</p>
            <h2 className="text-4xl font-bold text-navy">Where We&apos;re Headed</h2>
            <p className="text-navy/60 mt-4">We&apos;re just getting started. Here&apos;s what we&apos;re working toward next.</p>
          </AnimateIn>
          <div className="space-y-6">
            {[
              {
                title: "Grow Our Volunteer Base",
                desc: "We want to bring more students into the fold — people who care and want to show up. The more hands, the more meals we can get out.",
              },
              {
                title: "Host Regular Distribution Events",
                desc: "Our goal is to run consistent, scheduled outreach events so that the people we serve know when and where to find us.",
              },
              {
                title: "Raise Community Awareness",
                desc: "We’re building a platform to educate our school and local community about the realities of homelessness and poverty in Austin.",
              },
              {
                title: "Partner With Local Organizations",
                desc: "We’re working to connect with established Austin nonprofits so we can plug into larger efforts and maximize every resource we have.",
              },
            ].map((goal, i) => (
              <AnimateIn key={goal.title} delay={i * 0.1} once direction="left">
                <div className="flex gap-6 items-start bg-cream rounded-2xl p-6">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange flex items-center justify-center shadow">
                    <span className="text-white font-bold text-sm">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-navy mb-1">{goal.title}</h3>
                    <p className="text-navy/70 leading-relaxed text-sm">{goal.desc}</p>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Photo gallery */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-12">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">In the Field</p>
            <h2 className="text-4xl font-bold text-navy">Moments That Matter</h2>
          </AnimateIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "/images/618720800_17846309661670324_2456509979080549696_n.jpg",
              "/images/618808721_17846309583670324_7652664320948850511_n.jpg",
              "/images/619581100_17846309634670324_1943955190003904023_n.jpg",
              "/images/619777867_17846309670670324_4832650059086895_n.jpg",
            ].map((src, i) => (
              <AnimateIn key={i} delay={i * 0.1} once>
                <div className="overflow-hidden rounded-2xl shadow-md">
                  <Image
                    src={src}
                    alt={`Impact photo ${i + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <AnimateIn once>
            <h2 className="text-4xl font-bold text-white mb-6">Help Us Do Even More</h2>
            <p className="text-white/70 mb-10 text-lg">
              Your time, talent, or treasure can multiply what we do every week.
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
                Make a Donation
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
