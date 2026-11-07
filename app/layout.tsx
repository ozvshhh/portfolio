import type { Metadata } from "next";
import { Geist_Mono, Noto_Serif_KR } from "next/font/google";
import Header from "@/components/Header";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Noto_Serif_KR({ variable: "--font-serif", weight: ["400", "600"], preload: false });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: `${site.name} | ${site.role}`, template: `%s | ${site.name}` },
  description: site.bio.short,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${serif.variable} ${geistMono.variable} antialiased`}>
      <body>
        <div className="mx-auto max-w-2xl px-6 py-16">
          <Header />
          <main>{children}</main>
          <footer className="mt-20 border-t border-line pt-6 text-sm text-muted">
            © 2026 {site.name}
          </footer>
        </div>
      </body>
    </html>
  );
}
