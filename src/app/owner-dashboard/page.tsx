'use client';

export default function OwnerDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Bảng Điều Khiển Chủ Bãi</h1>
        <p className="mt-1 text-sm text-gray-500">
          Quản lý danh sách các bãi đỗ xe, cấu hình bảng giá và theo dõi công suất lấp đầy.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="text-xs font-medium text-gray-500">Tổng số bãi</span>
          <p className="mt-1 text-2xl font-bold text-gray-900">2 bãi</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="text-xs font-medium text-gray-500">Tổng công suất</span>
          <p className="mt-1 text-2xl font-bold text-gray-900">120 chỗ</p>
        </div>
        <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
          <span className="text-xs font-medium text-gray-500">Tỷ lệ lấp đầy hôm nay</span>
          <p className="mt-1 text-2xl font-bold text-blue-600">68%</p>
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Danh Sách Bãi Quản Lý</h2>
        <div className="mt-4 divide-y divide-gray-100">
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-900">Bãi Đỗ Xe Quận 1 - Khu A</p>
              <p className="text-xs text-gray-500">Địa chỉ: 123 Lê Lợi, P. Bến Nghé, Q.1</p>
            </div>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Đang hoạt động
            </span>
          </div>
          <div className="flex items-center justify-between py-3">
            <div>
              <p className="font-medium text-gray-900">Bãi Đỗ Landmark 81 - Tầng Hầm B1</p>
              <p className="text-xs text-gray-500">Địa chỉ: 208 Nguyễn Hữu Cảnh, Q. Bình Thạnh</p>
            </div>
            <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              Đang hoạt động
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
