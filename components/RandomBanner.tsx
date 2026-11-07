"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const COUNT = 5;

// 정적 사이트라 서버에서 고를 수 없어서, 브라우저에서 접속할 때 한 번 고릅니다.
// 고르는 동안에는 같은 비율의 빈 영역을 잡아 두어 화면이 밀리지 않습니다.
export default function RandomBanner() {
  const [n, setN] = useState<number | null>(null);

  useEffect(() => {
    setN(Math.floor(Math.random() * COUNT) + 1);
  }, []);

  return (
    <div className="mb-6 aspect-[3/1] w-full overflow-hidden rounded-sm bg-line/40">
      {n && (
        <Image
          src={`/banners/${n}.jpg`}
          alt=""
          width={1400}
          height={467}
          priority
          className="h-full w-full animate-[fadein_0.4s_ease-out] object-cover dark:brightness-[0.86] dark:contrast-[0.97] dark:saturate-[0.82]"
        />
      )}
    </div>
  );
}
