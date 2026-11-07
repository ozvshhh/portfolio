import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPost, getPosts } from "@/lib/posts";

export function generateStaticParams() {
  const posts = getPosts();
  // 직접 쓴 글이 없어도 빌드가 되도록 더미 경로를 둡니다(실제로는 404).
  return posts.length ? posts.map((p) => ({ slug: p.slug })) : [{ slug: "_empty" }];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.meta.title, description: post.meta.summary } : {};
}

export default async function Post({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();
  return (
    <article>
      <h1 className="text-3xl font-semibold tracking-tight">{post.meta.title}</h1>
      <time className="mt-2 block text-sm text-muted">{post.meta.date}</time>
      <div className="prose prose-neutral mt-8 max-w-none dark:prose-invert">
        <MDXRemote source={post.content} />
      </div>
    </article>
  );
}
