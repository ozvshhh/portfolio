import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <ul className="space-y-8">
      {site.projects.map((p) => (
        <li key={p.title}>
          <div className="flex justify-between gap-4">
            <span className="font-semibold">{p.title}</span>
            <time className="shrink-0 text-sm text-muted">{p.period}</time>
          </div>
          <p className="mt-1 text-sm text-muted">
            {p.role} · {p.team}
          </p>
          {p.desc && (
            <p className="mt-2 leading-relaxed">
              {p.desc.split(/\*\*(.+?)\*\*/g).map((t, i) =>
                i % 2 ? <strong key={i} className="font-semibold">{t}</strong> : t,
              )}
            </p>
          )}
          {p.points.length > 0 && (
            <ul className="mt-2 list-disc space-y-1 pl-5 leading-relaxed marker:text-muted">
              {p.points.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          )}
          {p.images.length > 0 && (
            <div className="mt-4 grid grid-cols-2 gap-3">
              {p.images.map((im) => (
                <a
                  key={im.src}
                  href={im.src}
                  target="_blank"
                  rel="noreferrer"
                  className={im.wide ? "col-span-2" : undefined}
                >
                  <figure>
                    <Image
                      src={im.src}
                      alt={im.alt}
                      width={im.w}
                      height={im.h}
                      style={{ aspectRatio: im.ratio ?? (im.wide ? `${im.w} / ${im.h}` : "16 / 10") }}
                      className={`w-full object-cover object-top ${im.plain ? "" : "rounded-sm border border-line"}`}
                    />
                    <figcaption className="mt-1 text-xs text-muted">{im.caption}</figcaption>
                  </figure>
                </a>
              ))}
            </div>
          )}
          <p className="mt-2 font-mono text-xs text-muted">{p.stack.join(" · ")}</p>
          {(p.href || p.repos.length > 0) && (
            <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {p.href && (
                <a href={p.href} className="link text-muted hover:text-foreground" target="_blank" rel="noreferrer">
                  Demo ↗
                </a>
              )}
              {p.repos.map((r) => (
                <a key={r.href} href={r.href} className="link text-muted hover:text-foreground" target="_blank" rel="noreferrer">
                  {r.label} ↗
                </a>
              ))}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
