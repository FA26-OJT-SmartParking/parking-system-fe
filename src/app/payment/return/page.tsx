'use client';

import Link from 'next/link';

export default function PaymentReturnPage() {
  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-green-200 bg-white p-8 text-center shadow-sm">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-green-100 text-2xl font-bold text-green-600">
        ✓
      </div>
      <h1 className="mt-4 text-2xl font-bold text-gray-900">Giao Dịch Thành Công!</h1>
      <p className="mt-2 text-sm text-gray-600">
        Khoản thanh toán của bạn đã được ghi nhận vào hệ thống. Biên nhận điện tử đã gửi tới email tài khoản.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          href="/booking"
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
        >
          Xem Đặt Chỗ
        </Link>
        <Link
          href="/"
          className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Về Trang Chủ
        </Link>
      </div>
    </div>
  );
}
