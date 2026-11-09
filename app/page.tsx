import Image from "next/image";
import Link from "next/link";
import Bio from "@/components/Bio";
import { site } from "@/lib/site";
import { getEntries } from "@/lib/blog";
import EntryLink from "@/components/EntryLink";

export default function Home() {
  const posts = getEntries().slice(0, 8);
  return (
    <div className="space-y-14">
      <Bio />

      <section>
        <h2 className="mb-4 text-lg font-semibold">Projects</h2>
        <ul className="space-y-3">
          {site.projects.map((p) => {
            const thumb = p.images[0];
            return (
              <li
                key={p.slug}
                className="group relative flex flex-col gap-3 rounded-lg border border-line p-3 transition-colors hover:border-foreground/40 sm:flex-row sm:gap-4"
              >
                <div className="h-28 w-full shrink-0 overflow-hidden rounded-md bg-line/30 sm:h-24 sm:w-40">
                  {thumb && (
                    <Image src={thumb.src} alt="" width={thumb.w} height={thumb.h} className="h-full w-full object-contain p-1.5" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <Link href={`/projects#${p.slug}`} className="font-semibold after:absolute after:inset-0">
                      {p.title}
                    </Link>
                    <time className="shrink-0 text-xs text-muted">{p.period}</time>
                  </div>
                  <p className="mt-1 text-sm leading-snug text-muted">{p.summary}</p>
                  <p className="relative z-10 mt-2 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted">
                    {p.href && (
                      <a href={p.href} className="link hover:text-foreground" target="_blank" rel="noreferrer">
                        Demo ↗
                      </a>
                    )}
                    {p.repos.map((r) => (
                      <a key={r.href} href={r.href} className="link hover:text-foreground" target="_blank" rel="noreferrer">
                        {p.repos.length === 1 ? "GitHub" : r.label} ↗
                      </a>
                    ))}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
        <Link
          href="/projects"
          className="link mt-3 inline-block text-sm text-muted hover:text-foreground"
        >
          프로젝트 자세히 보기 →
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Awards</h2>
        <ul className="divide-y divide-line">
          {site.awards.map((a) => (
            <li key={a.event} className="flex justify-between gap-4 py-2">
              <span>
                <strong className="font-semibold">{a.title}</strong>
                {a.href ? (
                  <a href={a.href} className="link text-muted hover:text-foreground" target="_blank" rel="noreferrer">
                    {" "}· {a.event}
                  </a>
                ) : (
                  <span className="text-muted"> · {a.event}</span>
                )}
              </span>
              <time className="shrink-0 text-sm text-muted">{a.date}</time>
            </li>
          ))}
        </ul>
        <Link href="/resume" className="link mt-3 inline-block text-sm text-muted hover:text-foreground">
          전체 이력 보기 →
        </Link>
      </section>

      <section>
        <h2 className="mb-4 text-lg font-semibold">Blog</h2>
        <ul>
          {posts.map((p) => (
            <li key={p.href}>
              <EntryLink e={p} className="flex justify-between gap-4 py-2 hover:text-muted" />
            </li>
          ))}
        </ul>
        <Link href="/blog" className="link mt-3 inline-block text-sm text-muted hover:text-foreground">
          모든 글 보기 →
        </Link>
      </section>
    </div>
  );
}
