'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookingPage() {
  const [lot, setLot] = useState('00000000-0000-0000-0000-000000000001');
  const [vehicleType, setVehicleType] = useState('Car');
  const [plate, setPlate] = useState('30A-999.88');
  const [durationHours, setDurationHours] = useState(2);
  const [isSuccess, setIsSuccess] = useState(false);

  const depositAmount = vehicleType === 'Car' ? 50000 : 20000;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Đặt Chỗ Đỗ Xe</h1>
        <p className="mt-1 text-sm text-gray-500">
          Giữ chỗ trong vòng 30 phút hoặc lên lịch đặt trước lên đến 7 ngày.
        </p>
      </div>

      {isSuccess ? (
        <div className="rounded-xl border border-green-200 bg-green-50 p-6 text-green-900 shadow-sm">
          <h2 className="text-lg font-bold">Đặt chỗ thành công!</h2>
          <p className="mt-2 text-sm text-green-800">
            Mã đặt chỗ của bạn đã được ghi nhận. Vui lòng thanh toán tiền cọc trong vòng 10 phút.
          </p>
          <div className="mt-4 flex gap-3">
            <Link
              href="/payment"
              className="rounded-lg bg-green-700 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-800"
            >
              Thanh Toán Cọc ({depositAmount.toLocaleString('vi-VN')} đ)
            </Link>
            <button
              onClick={() => setIsSuccess(false)}
              className="rounded-lg border border-green-300 bg-white px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-50"
            >
              Đặt Chỗ Khác
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div>
            <label className="block text-sm font-medium text-gray-700">Chọn bãi đỗ xe</label>
            <select
              value={lot}
              onChange={(e) => setLot(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            >
              <option value="00000000-0000-0000-0000-000000000001">Bãi đỗ trung tâm Quận 1 (Khu A)</option>
              <option value="00000000-0000-0000-0000-000000000002">Bãi đỗ Landmark 81 (Khu B)</option>
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">Loại phương tiện</label>
              <select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              >
                <option value="Car">Ô tô (Car)</option>
                <option value="Motorbike">Xe máy (Motorbike)</option>
                <option value="Bicycle">Xe đạp (Bicycle)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Biển số xe</label>
              <input
                type="text"
                value={plate}
                onChange={(e) => setPlate(e.target.value)}
                required={vehicleType !== 'Bicycle'}
                placeholder="VD: 30A-123.45"
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Thời gian dự kiến (giờ)</label>
            <input
              type="number"
              min={1}
              max={24}
              value={durationHours}
              onChange={(e) => setDurationHours(Number(e.target.value))}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="rounded-lg bg-gray-50 p-4">
            <div className="flex justify-between text-sm text-gray-600">
              <span>Tiền cọc giữ chỗ:</span>
              <span className="font-semibold text-gray-900">{depositAmount.toLocaleString('vi-VN')} đ</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            Xác Nhận Đặt Chỗ
          </button>
        </form>
      )}
    </div>
  );
}
