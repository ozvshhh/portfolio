import Link from "next/link";
import type { Entry } from "@/lib/blog";

export default function EntryLink({ e, className }: { e: Entry; className: string }) {
  const body = (
    <>
      <span>
        {e.title}
        {e.external && <span aria-hidden className="ml-1 text-muted">↗</span>}
      </span>
      <time className="shrink-0 text-sm text-muted">{e.date}</time>
    </>
  );
  return e.external ? (
    <a href={e.href} target="_blank" rel="noreferrer" className={className}>{body}</a>
  ) : (
    <Link href={e.href} className={className}>{body}</Link>
  );
}
