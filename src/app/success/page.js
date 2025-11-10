"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const requestData = {
      orderId: searchParams.get("orderId"),
      amount: searchParams.get("amount"),
      paymentKey: searchParams.get("paymentKey"),
    };

    //실제로 결제가 승인되었는지 백엔드에 확인 요청
    async function confirmPayment() {
      try {
        const res = await fetch("http://localhost:8080/api/pay/toss/confirm", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestData),
        });

        if (res.ok) {
          console.log("결제 승인 성공");
        } else {
          console.log("결제 승인 실패");
          router.push("/fail");
        }
      } catch (e) {
        console.error("서버 연결 실패:", e);
        router.push("/fail");
      }
    }

    confirmPayment();
  }, []);

  return (
    <main style={{ padding: 24 }}>
      <h1>! 결제가 완료되었습니다 !</h1>
      <p>주문번호: {searchParams.get("orderId")}</p>
      <p>결제 금액: {Number(searchParams.get("amount")).toLocaleString()}원</p>
      <p>paymentKey: {searchParams.get("paymentKey")}</p>
    </main>
  );
}