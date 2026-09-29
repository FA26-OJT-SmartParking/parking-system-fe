export type ReservationStatus = 'PendingDeposit' | 'Confirmed' | 'Cancelled' | 'Completed';
export type VehicleType = 'Car' | 'Motorbike' | 'Bicycle';

export interface Reservation {
  id: string;
  userId: string;
  lotId: string;
  slotCode?: string;
  vehicleType: VehicleType;
  plateNumber?: string;
  status: ReservationStatus;
  depositAmount: number;
  createdAt: string;
}
