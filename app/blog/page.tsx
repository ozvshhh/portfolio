import type { Metadata } from "next";
import { getEntries } from "@/lib/blog";
import EntryLink from "@/components/EntryLink";

export const metadata: Metadata = { title: "Blog" };

export default function Blog() {
  return (
    <ul className="divide-y divide-line">
      {getEntries().map((e) => (
        <li key={e.href}>
          <EntryLink e={e} className="flex justify-between gap-4 py-3 hover:text-muted" />
          {e.summary && <p className="-mt-1 pb-3 text-sm text-muted">{e.summary}</p>}
        </li>
      ))}
    </ul>
  );
}
