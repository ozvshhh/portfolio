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
        <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {site.projects.map((p) => (
            <li key={p.title} className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
              <span className="flex gap-2 text-foreground">
                <span aria-hidden className="text-muted">▪</span>
                {p.title}
              </span>
              <span className="flex flex-wrap gap-x-3 text-sm text-muted">
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
              </span>
            </li>
          ))}
        </ul>
        <Link href="/projects" className="link mt-3 inline-block text-sm text-muted hover:text-foreground">
          자세히 보기 →
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
