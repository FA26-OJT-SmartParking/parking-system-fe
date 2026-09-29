export type UserRole = 'driver' | 'owner' | 'staff' | 'admin';

export interface User {
  id: string;
  email: string;
  fullName?: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}
