'use client';

import { useState } from 'react';

export default function LoginPage() {
  const [isOtpStep, setIsOtpStep] = useState(false);
  const [email, setEmail] = useState('driver@example.com');
  const [otp, setOtp] = useState('');

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOtpStep(true);
  };

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Đăng nhập thành công với vai trò: Khách hàng (Driver)');
  };

  return (
    <div className="mx-auto max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Đăng Nhập SmartParking</h1>
        <p className="mt-1 text-sm text-gray-500">Đăng nhập không cần mật khẩu với mã xác thực OTP qua Email</p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        {!isOtpStep ? (
          <form onSubmit={handleSendOtp} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Địa chỉ Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Gửi Mã OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleVerify} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Mã OTP (6 chữ số)</label>
              <input
                type="text"
                maxLength={6}
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                placeholder="123456"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-center text-lg tracking-widest focus:border-blue-500 focus:outline-none"
              />
              <p className="mt-1 text-xs text-gray-500">Mã đã gửi tới {email}</p>
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
            >
              Xác Nhận & Đăng Nhập
            </button>
            <button
              type="button"
              onClick={() => setIsOtpStep(false)}
              className="w-full text-center text-xs text-gray-500 hover:text-gray-700"
            >
              Thay đổi email
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
