import Link from "next/link";
import { site } from "@/lib/site";

export default function Bio() {
  return (
    <section>
      <div className="mb-4 border-b border-line pb-2 text-sm text-muted">Bio</div>
      <p className="whitespace-pre-line leading-relaxed">{site.bio.short}</p>
      <Link
        href="/about"
        className="link mt-3 inline-block text-sm text-muted hover:text-foreground"
      >
        더 자세히 읽어보기 →
      </Link>
      <p className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
        {site.links.map((l) => {
          const isMail = l.href.startsWith("mailto:");
          return (
            <span key={l.label} className="flex items-baseline gap-2">
              <a href={l.href} className="link text-muted hover:text-foreground" target={isMail ? undefined : "_blank"} rel="noreferrer">
                {l.label}
              </a>
              {isMail && <span className="select-all text-foreground">{l.href.replace("mailto:", "")}</span>}
            </span>
          );
        })}
      </p>
    </section>
  );
}
