import Link from 'next/link';
import { ParkingDashboard } from '@/components/parking/ParkingDashboard';

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-12 text-white shadow-lg sm:px-12">
        <div className="max-w-3xl space-y-4">
          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            Nền Tảng Đỗ Xe Thông Minh
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Tìm & Đặt Chỗ Đỗ Xe Nhanh Chóng Với 3D và AI
          </h1>
          <p className="text-base text-blue-100 sm:text-lg">
            Xem trước sơ đồ bãi đỗ xe 3D thời gian thực, đặt chỗ trước chuyến đi với bảo chứng VNPay và tự động xếp chỗ qua camera nhận diện thông minh.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/parking-3d"
              className="rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50"
            >
              Xem Sơ Đồ 3D
            </Link>
            <Link
              href="/booking"
              className="rounded-lg border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              Đặt Chỗ Ngay
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          Trực Tiếp: Trạng Thái Bãi Đỗ Mẫu
        </h2>
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <ParkingDashboard />
        </div>
      </section>
    </div>
  );
}
