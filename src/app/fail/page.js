"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FailPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    console.error("결제 실패:", {
      message: searchParams.get("message"),
      code: searchParams.get("code"),
    });
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>결제 실패</h1>
      <p>결제가 정상적으로 처리되지 않았습니다.</p>
      <p>사유: {searchParams.get("message") || "알 수 없음"}</p>
      <button
        onClick={() => router.push("/")}
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#0064FF",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        홈으로 돌아가기
      </button>
    </main>
  );
}