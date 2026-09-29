'use client';

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200 pb-4">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">Hệ Thống Quản Trị (Admin)</h1>
        <p className="mt-1 text-sm text-gray-500">
          Phê duyệt yêu cầu mở bãi đỗ mới, giám sát trạng thái vi dịch vụ và phân quyền người dùng.
        </p>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
        <h2 className="text-lg font-semibold text-gray-900">Yêu cầu đăng ký bãi đỗ cần phê duyệt (BR-06)</h2>
        <div className="rounded-lg border border-dashed border-gray-200 p-8 text-center text-sm text-gray-500">
          Hiện tại không có yêu cầu nào đang chờ duyệt.
        </div>
      </div>

      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900">Trạng Thái Kết Nối Vi Dịch Vụ</h2>
        <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {['Identity', 'Parking', 'Booking', 'Payment', 'Notification', 'AI Service', 'Gateway', 'RabbitMQ'].map((s) => (
            <div key={s} className="flex items-center gap-2 rounded-lg bg-gray-50 p-3 text-sm">
              <span className="size-2 rounded-full bg-green-500" />
              <span className="font-medium text-gray-800">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
