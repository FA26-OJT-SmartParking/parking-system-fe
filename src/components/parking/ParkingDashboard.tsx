"use client";

import { API_BASE_URL } from "@/lib/config";
import { useSlotStatuses, type ConnectionState } from "@/hooks/useSlotStatuses";
import { ParkingLot3D } from "./ParkingLot3D";

// Sample lot published by the camera simulator in the backend: slots A-01 to A-10
const SLOT_CODES = Array.from({ length: 10 }, (_, index) => `A-${String(index + 1).padStart(2, "0")}`);

const CONNECTION_LABELS: Record<ConnectionState, string> = {
  connecting: "Đang kết nối…",
  connected: "Trực tiếp",
  disconnected: "Mất kết nối",
};

const CONNECTION_STYLES: Record<ConnectionState, string> = {
  connecting: "bg-yellow-100 text-yellow-800",
  connected: "bg-green-100 text-green-800",
  disconnected: "bg-red-100 text-red-800",
};

export function ParkingDashboard() {
  const { statuses, connection } = useSlotStatuses();
  const occupied = SLOT_CODES.filter((code) => statuses[code] === "Occupied").length;

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-6">
      <header className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-semibold">Bãi đỗ mẫu</h1>
        <span className={`rounded-full px-2.5 py-0.5 text-sm ${CONNECTION_STYLES[connection]}`}>
          {CONNECTION_LABELS[connection]}
        </span>
      </header>

      <div className="my-4">
        <ParkingLot3D slotCodes={SLOT_CODES} statuses={statuses} />
      </div>

      <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
        <span>
          {occupied}/{SLOT_CODES.length} chỗ có xe
        </span>
        <Legend color="bg-green-500" label="Trống" />
        <Legend color="bg-red-500" label="Có xe" />
        <Legend color="bg-gray-400" label="Chưa có dữ liệu" />
      </p>

      {connection === "disconnected" && (
        <p className="mt-3 text-red-700">
          Không kết nối được tới {API_BASE_URL}. Hãy chạy backend bằng Docker Compose với <code>--profile sim</code> rồi
          tải lại trang.
        </p>
      )}
    </main>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`inline-block size-2.5 rounded-sm ${color}`} />
      {label}
    </span>
  );
}
