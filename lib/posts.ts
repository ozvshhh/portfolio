import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const fmt = (d: unknown) => (d instanceof Date ? d.toISOString().slice(0, 10) : String(d ?? ""));

const dir = path.join(process.cwd(), "content/posts");

export type Post = { slug: string; title: string; date: string; summary: string };

export function getPosts(): Post[] {
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { data } = matter(fs.readFileSync(path.join(dir, f), "utf8"));
      return {
        slug,
        title: String(data.title ?? slug),
        date: fmt(data.date),
        summary: String(data.summary ?? ""),
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string) {
  const file = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    content,
    meta: { slug, title: String(data.title ?? slug), date: fmt(data.date), summary: String(data.summary ?? "") },
  };
}
