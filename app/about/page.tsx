import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

// 문단 안의 [글자](주소) 형식을 링크로 바꿉니다.
function renderInline(text: string) {
  return text.split(/(\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const m = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!m) return part;
    // 사이트 안 이동(/로 시작)은 같은 탭, 바깥 주소는 새 탭으로 엽니다.
    if (m[2].startsWith("/")) {
      return (
        <Link key={i} href={m[2]} className="link-text hover:text-muted">
          {m[1]}
        </Link>
      );
    }
    return (
      <a key={i} href={m[2]} className="link-text hover:text-muted" target="_blank" rel="noreferrer">
        {m[1]}
      </a>
    );
  });
}

export default function About() {
  return (
    <div className="space-y-10">
      {site.about.map((sec, i) => (
        <section key={i}>
          {sec.title && <h2 className="mb-3 text-lg font-semibold">{sec.title}</h2>}
          <div className="space-y-4 leading-relaxed">
            {sec.paragraphs.map((t, j) => (
              <p key={t} className={i === 0 && j === 0 ? "text-xl font-semibold" : undefined}>
                {renderInline(t)}
              </p>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
