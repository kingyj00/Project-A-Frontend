"use client"; 
// Next.js 13+에서 브라우저(클라이언트)에서 동작하는 코드라는 뜻이에요.

import { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";

// 토스에서 제공한 테스트용 키 (실제 운영 시엔 환경변수로 변경)
const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "SBxrz80rBtb6ZRTvVpZC-";

export default function CheckoutPage() {
  const [widgets, setWidgets] = useState(null); // 토스 결제 위젯 객체
  const [ready, setReady] = useState(false); // 결제 버튼 활성화 여부

  // 페이지 처음 열릴 때 한 번만 실행
  useEffect(() => {
    async function initToss() {
      // 1️⃣ 토스 SDK 불러오기 (토스 서버에서 결제 위젯 로드)
      const tossPayments = await loadTossPayments(clientKey);

      // 2️⃣ 사용자 정보로 위젯 초기화
      const _widgets = tossPayments.widgets({ customerKey });
      setWidgets(_widgets);

      // 3️⃣ 결제 금액 / UI 구성
      await _widgets.setAmount({ currency: "KRW", value: 50000 }); // 금액 설정
      await _widgets.renderPaymentMethods({ selector: "#payment-method" }); // 결제수단 UI
      await _widgets.renderAgreement({ selector: "#agreement" }); // 약관동의 UI

      // 4️⃣ 모두 준비 완료
      setReady(true);
    }

    initToss();
  }, []);

  // 결제 버튼 클릭 시 호출되는 함수
  async function handlePayment() {
    if (!widgets) return;

    await widgets.requestPayment({
      orderId: "ORDER_001", // 주문번호 (백엔드에서도 검증용으로 사용)
      orderName: "테스트 결제", // 결제 항목 이름
      successUrl: window.location.origin + "/success", // 결제 성공 후 이동
      failUrl: window.location.origin + "/fail", // 결제 실패 시 이동
    });
  }

  // 실제 화면(UI)
  return (
    <main style={{ padding: 24 }}>
      <h1>Toss 테스트 결제</h1>

      {/* 결제 수단 UI 영역 */}
      <div id="payment-method" style={{ margin: "16px 0" }} />

      {/* 약관동의 UI 영역 */}
      <div id="agreement" style={{ margin: "16px 0" }} />

      {/* 결제 버튼 */}
      <button
        disabled={!ready} // 아직 초기화 중이면 버튼 비활성화
        onClick={handlePayment}
        style={{
          padding: "10px 20px",
          background: ready ? "#0064FF" : "#ccc",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: ready ? "pointer" : "not-allowed",
        }}
      >
        결제하기
      </button>
    </main>
  );
}