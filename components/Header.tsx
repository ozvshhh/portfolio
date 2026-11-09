import RandomBanner from "@/components/RandomBanner";
import Link from "next/link";
import { site } from "@/lib/site";

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  return (
    <header className="mb-12">
      <RandomBanner />
      <Link href="/" className="text-2xl font-semibold tracking-tight">
        {site.handle}
      </Link>
      <nav className="mt-6 flex gap-5 border-b border-line pb-3 text-sm text-muted">
        {nav.map((n) => (
          <Link key={n.href} href={n.href} className="hover:text-foreground">
            {n.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
