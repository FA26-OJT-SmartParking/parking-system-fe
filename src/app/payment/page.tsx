'use client';

import { useState } from 'react';

export default function PaymentPage() {
  const [plate, setPlate] = useState('30A-999.88');
  const [debtAmount, setDebtAmount] = useState<number | null>(null);

  const checkDebt = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate debt response
    setDebtAmount(0);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Thanh Toán & Tra Cứu Nợ</h1>
        <p className="mt-1 text-sm text-gray-500">
          Tra cứu nợ phí theo biển số xe hoặc thanh toán hóa đơn đỗ xe qua cổng VNPay.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-5">
        <h2 className="text-lg font-semibold text-gray-900">Tra cứu phí tồn đọng (BR-05)</h2>
        <form onSubmit={checkDebt} className="flex gap-3">
          <input
            type="text"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            placeholder="Nhập biển số xe (VD: 30A-999.88)"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Kiểm tra
          </button>
        </form>

        {debtAmount !== null && (
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 text-blue-900">
            <p className="text-sm">
              Biển số <strong>{plate}</strong>: {debtAmount === 0 ? 'Không có khoản nợ nào. Đủ điều kiện vào bãi.' : `Còn nợ ${debtAmount.toLocaleString('vi-VN')} đ`}
            </p>
          </div>
        )}
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Cổng thanh toán VNPay Sandbox</h2>
        <p className="text-sm text-gray-600">
          Tích hợp thanh toán an toàn trực tuyến qua cổng VNPay (Thẻ ATM nội địa, QR Pay, Thẻ quốc tế).
        </p>
        <button
          onClick={() => alert('Chuyển hướng sang VNPay Sandbox Gateway...')}
          className="rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700"
        >
          Thanh Toán Qua VNPay
        </button>
      </div>
    </div>
  );
}
