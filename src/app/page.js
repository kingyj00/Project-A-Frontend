"use client";

import { useEffect, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";

const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "SBxrz80rBtb6ZRTvVpZC-";

export default function CheckoutPage() {
  const [widgets, setWidgets] = useState(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function initToss() {
      const tossPayments = await loadTossPayments(clientKey);
      const _widgets = tossPayments.widgets({ customerKey });
      setWidgets(_widgets);

      await _widgets.setAmount({ currency: "KRW", value: 7 });
      await _widgets.renderPaymentMethods({ selector: "#payment-method" });
      await _widgets.renderAgreement({ selector: "#agreement" });

      setReady(true);
    }
    initToss();
  }, []);

  async function handlePayment() {
    if (!widgets) return;

    await widgets.requestPayment({
      method: "CARD",
      orderId: "order-test",
      orderName: "테스트 상품 결제",
      successUrl: `${window.location.origin}/success`,
      failUrl: `${window.location.origin}/fail`,
      customerEmail: "customer123@gmail.com",
      customerName: "KINGYJ",
      customerMobilePhone: "01012341234",
      flowMode: "DIALOG",
      easyPay: null,
    });
  }

  return (
    <main className="p-6 min-h-screen bg-white text-black">
      <h1 className="text-2xl font-bold mb-6">Toss 테스트 결제</h1>

      <div id="payment-method" className="my-4" />
      <div id="agreement" className="my-4" />

      <button
        disabled={!ready}
        onClick={handlePayment}
        className={`px-6 py-3 text-white rounded-lg ${
          ready ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        결제하기
      </button>
    </main>
  );
}