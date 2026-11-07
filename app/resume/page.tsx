import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Resume" };

function Row({ title, sub, date, href }: { title: string; sub?: string; date: string; href?: string }) {
  return (
    <li className="flex justify-between gap-4 py-2">
      <span>
        {href ? (
          <a href={href} className="link" target="_blank" rel="noreferrer">{title} ↗</a>
        ) : (
          title
        )}
        {sub && <span className="text-muted"> · {sub}</span>}
      </span>
      <time className="shrink-0 text-sm text-muted">{date}</time>
    </li>
  );
}

export default function Resume() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="mb-3 text-lg font-semibold">Awards</h2>
        <ul className="divide-y divide-line">
          {site.awards.map((a) => (
            <Row key={a.event} title={`${a.title} · ${a.event}`} sub={`${a.org} · ${a.note}`} date={a.date} href={a.href} />
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-3 text-lg font-semibold">Activities</h2>
        <ul className="divide-y divide-line">
          {site.activities.map((a) => (
            <Row key={a.title} title={a.title} sub={[a.role, a.org].filter(Boolean).join(" · ")} date={a.date} />
          ))}
        </ul>
      </section>
      <section>
        <h2 className="mb-3 text-lg font-semibold">Certificates</h2>
        <ul className="divide-y divide-line">
          {site.certificates.map((c) => (
            <Row key={c.title} title={c.title} sub={c.org} date={c.date} />
          ))}
        </ul>
      </section>
    </div>
  );
}
