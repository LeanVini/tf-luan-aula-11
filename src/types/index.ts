/**
 * Tipos e interfaces da aplicação
 */

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  company?: string;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
}

export interface UsersState {
  users: User[];
  pagination: PaginationInfo;
  loading: boolean;
  error: string | null;
}

export type UsersAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_USERS'; payload: { users: User[]; totalItems: number } }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'CHANGE_PAGE'; payload: number }
  | { type: 'RESET' };
