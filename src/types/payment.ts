export interface PaymentInfo {
  paymentId: string;
  sessionId?: string;
  reservationId?: string;
  amount: number;
  method: 'VNPay' | 'Cash';
  status: 'Pending' | 'Completed' | 'Failed';
}

export interface DebtCheckResult {
  hasDebt: boolean;
  amount: number;
}
