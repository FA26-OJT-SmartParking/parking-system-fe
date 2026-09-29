const STATUS_COLORS: Record<string, number> = { Available: 0x22c55e, Occupied: 0xef4444 };

export const NO_DATA_COLOR = 0x9ca3af;

/** Color of a slot box in the 3D lot for a status received from the backend. */
export function slotColor(status: string | undefined): number {
  return status !== undefined && Object.hasOwn(STATUS_COLORS, status) ? STATUS_COLORS[status] : NO_DATA_COLOR;
}
