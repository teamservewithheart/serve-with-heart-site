import Image from "next/image";
import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { Heart, Users, Star, ArrowRight } from "lucide-react";

export const metadata = {
  title: "About Us | Serve With Heart",
  description: "Learn about our mission, values, and the team behind Serve With Heart.",
};

const values = [
  {
    icon: <Heart className="h-6 w-6 text-orange" />,
    title: "Compassion",
    desc: "We serve every person with dignity, warmth, and genuine care — no exceptions.",
  },
  {
    icon: <Users className="h-6 w-6 text-orange" />,
    title: "Community",
    desc: "We believe real change happens when neighbors show up for neighbors.",
  },
  {
    icon: <Star className="h-6 w-6 text-orange" />,
    title: "Excellence",
    desc: "We hold ourselves to high standards in every meal served and every life touched.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-24">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <AnimateIn once>
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">About Us</p>
            <h1 className="text-5xl font-bold mb-6">Who We Are</h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
              Serve With Heart is a youth-led nonprofit founded in Austin, Texas with a simple belief:
              every person — regardless of their circumstances — deserves to be seen, heard, and loved.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimateIn once direction="left">
              <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">Our Story</p>
              <h2 className="text-4xl font-bold text-navy mb-6">Started by Youth, Powered by Heart</h2>
              <p className="text-navy/70 leading-relaxed mb-5">
                Serve With Heart started with a simple decision — a group of students who looked around
                and decided to do something. We began by purchasing meals and personally handing them
                out to homeless individuals in our community. No big launch, no fanfare. Just showing up.
              </p>
              <p className="text-navy/70 leading-relaxed mb-8">
                Today, we&apos;re a team of 7+ student volunteers committed to donating meals,
                organizing outreach events, and raising awareness about local poverty. We&apos;re not
                a massive operation — and we&apos;re proud of that. Every dollar raised goes directly
                to the people who need it.
              </p>
              <Link
                href="/impact"
                className="inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
              >
                See our impact <ArrowRight className="h-4 w-4" />
              </Link>
            </AnimateIn>

            <AnimateIn once direction="right">
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src="/images/618720800_17846309661670324_2456509979080549696_n.jpg"
                  alt="Volunteers serving the community"
                  width={300}
                  height={350}
                  className="rounded-2xl shadow-lg w-full h-56 object-cover"
                />
                <Image
                  src="/images/618808721_17846309583670324_7652664320948850511_n.jpg"
                  alt="Community outreach"
                  width={300}
                  height={350}
                  className="rounded-2xl shadow-lg w-full h-56 object-cover mt-8"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimateIn once className="text-center mb-16">
            <p className="text-orange font-semibold uppercase tracking-wide text-sm mb-3">What Drives Us</p>
            <h2 className="text-4xl font-bold text-navy">Our Core Values</h2>
          </AnimateIn>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <AnimateIn key={v.title} delay={i * 0.15} once>
                <div className="bg-cream rounded-2xl p-8 text-center h-full">
                  <div className="w-14 h-14 rounded-full bg-orange/10 flex items-center justify-center mx-auto mb-5">
                    {v.icon}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3">{v.title}</h3>
                  <p className="text-navy/70 leading-relaxed">{v.desc}</p>
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
            <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-white/70 mb-10 text-lg">
              Whether you volunteer, donate, or simply share our story — you are part of this movement.
            </p>
            <Link
              href="/volunteer"
              className="inline-block rounded-full bg-orange px-8 py-4 font-semibold text-white hover:bg-orange-dark transition-all hover:shadow-xl"
            >
              Volunteer With Us
            </Link>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
