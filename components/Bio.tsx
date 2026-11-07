"use client";

import { useState } from "react";
import { site } from "@/lib/site";

export default function Bio() {
  const [mode, setMode] = useState<"short" | "long">("short");
  return (
    <section>
      <div>
        <div className="mb-4 flex items-center justify-between border-b border-line pb-2 text-sm">
          <span className="text-muted">Bio</span>
          <div className="flex gap-3">
            {(["short", "long"] as const).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`border-b pb-0.5 transition-colors ${
                  mode === m ? "border-foreground text-foreground" : "border-transparent text-muted hover:text-foreground"
                }`}
              >
                {m === "short" ? "Default" : "Long"}
              </button>
            ))}
          </div>
        </div>
        <p className="whitespace-pre-line leading-relaxed">{site.bio[mode]}</p>
        <p className="mt-5 flex flex-wrap items-baseline gap-x-4 gap-y-1 text-sm">
          {site.links.map((l) => {
            const isMail = l.href.startsWith("mailto:");
            return (
              <span key={l.label} className="flex items-baseline gap-2">
                <a href={l.href} className="link text-muted hover:text-foreground" target={isMail ? undefined : "_blank"} rel="noreferrer">
                  {l.label}
                </a>
                {isMail && <span className="select-all text-foreground">{l.href.replace("mailto:", "")}</span>}
              </span>
            );
          })}
        </p>
      </div>
    </section>
  );
}
