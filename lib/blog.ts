import { getPosts } from "@/lib/posts";

export type Entry = { title: string; date: string; href: string; external: boolean; summary?: string };

// Velog에 쓴 개발 관련 글. 새 글은 여기에 추가하면 Blog 목록에 나타납니다.
const velog: Omit<Entry, "external">[] = [
  {
    title: "2026 섬테크 해커톤 with 코드트리",
    date: "2026-11-01",
    href: "https://velog.io/@dlgkdms4660/2026-%EC%84%AC%ED%85%8C%ED%81%AC-%ED%95%B4%EC%BB%A4%ED%86%A4-with-%EC%BD%94%EB%93%9C%ED%8A%B8%EB%A6%AC-ru1ipduf",
  },
  {
    title: "한여름의 겨울방학 프론트엔드 스터디 회고",
    date: "2026-08-03",
    href: "https://velog.io/@dlgkdms4660/%ED%95%9C%EC%97%AC%EB%A6%84%EC%9D%98-%EA%B2%A8%EC%9A%B8%EB%B0%A9%ED%95%99-%EC%8A%A4%ED%84%B0%EB%94%94-%ED%9A%8C%EA%B3%A0",
  },
  {
    title: "신입생을 위한 백준공부법",
    date: "2024-03-03",
    href: "https://velog.io/@dlgkdms4660/%EC%8B%A0%EC%9E%85%EC%83%9D%EC%9D%84-%EC%9C%84%ED%95%9C-%EB%B0%B1%EC%A4%80%EA%B3%B5%EB%B6%80%EB%B2%95",
  },
  {
    title: "UMC 회고록",
    date: "2024-02-21",
    href: "https://velog.io/@dlgkdms4660/UMC-%ED%9A%8C%EA%B3%A0%EB%A1%9D",
  },
];

export function getEntries(): Entry[] {
  const local: Entry[] = getPosts().map((p) => ({
    title: p.title,
    date: p.date,
    href: `/blog/${p.slug}`,
    external: false,
    summary: p.summary,
  }));
  const ext: Entry[] = velog.map((v) => ({ ...v, external: true }));
  return [...local, ...ext].sort((a, b) => (a.date < b.date ? 1 : -1));
}
