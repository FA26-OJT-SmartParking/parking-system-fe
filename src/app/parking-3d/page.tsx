'use client';

import { ParkingDashboard } from '@/components/parking/ParkingDashboard';

export default function Parking3DPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Sơ Đồ Bãi Đỗ Xe 3D Realtime
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Dữ liệu chỗ trống được cập nhật trực tiếp qua kết nối SignalR với hệ thống camera bãi đỗ.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <ParkingDashboard />
      </div>
    </div>
  );
}
