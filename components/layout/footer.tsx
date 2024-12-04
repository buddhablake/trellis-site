import { Container } from "./container";
import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
] as const;

export function Footer() {
  return (
    <footer className="bg-forest py-12 border-t border-forest/10">
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="flex flex-col items-center gap-4 md:items-start">
            <Link href="/" className="relative w-24 h-6">
              <Image
                src="/logo/Trellis_logo.png"
                alt="Trellis"
                fill
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-cream/60">
              © {new Date().getFullYear()} Trellis. All rights reserved.
            </p>
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream/60 hover:text-cream transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </footer>
  );
}
