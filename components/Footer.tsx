import Link from "next/link";
import Image from "next/image";
import { Heart, Instagram, Mail, MapPin } from "lucide-react";

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.15 8.15 0 0 0 4.77 1.52V6.74a4.85 4.85 0 0 1-1-.05z" />
    </svg>
  );
}

const footerLinks = [
  { href: "/about", label: "About Us" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo.png"
                alt="Serve With Heart logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-lg font-bold">Serve With Heart</span>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed">
              Serving Austin&apos;s homeless and underserved communities with compassion,
              dignity, and love. Together, we can make a difference.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-orange mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-orange transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-orange mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://www.instagram.com/servewithheart2026"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors text-sm"
              >
                <Instagram className="h-4 w-4" />
                @servewithheart2026
              </a>
              <a
                href="https://www.tiktok.com/@teamservewithheart"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors text-sm"
              >
                <TikTokIcon className="h-4 w-4" />
                @teamservewithheart
              </a>
              <a
                href="mailto:teamservewithheart@gmail.com"
                className="flex items-center gap-2 text-white/70 hover:text-orange transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                teamservewithheart@gmail.com
              </a>
              <span className="flex items-center gap-2 text-white/70 text-sm">
                <MapPin className="h-4 w-4" />
                Austin, TX &amp; surrounding areas
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-sm">
            &copy; {new Date().getFullYear()} Serve With Heart. All rights reserved.
          </p>
          <p className="flex items-center gap-1 text-white/50 text-sm">
            Made with <Heart className="h-3.5 w-3.5 text-orange fill-orange" /> for our community
          </p>
        </div>
      </div>
    </footer>
  );
}
