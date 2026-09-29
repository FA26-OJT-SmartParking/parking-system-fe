export type SlotStatusType = 'Available' | 'Occupied' | 'Reserved' | 'OutOfService';

export interface ParkingSlot {
  code: string;
  status: SlotStatusType;
  updatedAt?: string;
}

export interface ParkingLot {
  id: string;
  name: string;
  address: string;
  totalSlots: number;
  availableSlots: number;
  occupiedSlots: number;
  pricePerHour: number;
}
