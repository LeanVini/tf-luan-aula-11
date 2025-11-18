import { UsersState, UsersAction } from '../types';

/**
 * Estado inicial da aplicação
 */
export const initialState: UsersState = {
  users: [],
  pagination: {
    currentPage: 1,
    totalPages: 0,
    itemsPerPage: 10,
    totalItems: 0,
  },
  loading: false,
  error: null,
};

/**
 * Reducer que gerencia o estado global de usuários
 * @param state - Estado atual
 * @param action - Ação a ser executada
 * @returns Novo estado
 */
export const usersReducer = (
  state: UsersState,
  action: UsersAction
): UsersState => {
  switch (action.type) {
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
        error: null,
      };

    case 'SET_USERS':
      const { users, totalItems } = action.payload;
      const totalPagesNew = Math.ceil(
        totalItems / state.pagination.itemsPerPage
      );

      return {
        ...state,
        users,
        pagination: {
          ...state.pagination,
          totalItems,
          totalPages: totalPagesNew,
        },
        loading: false,
        error: null,
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case 'CHANGE_PAGE':
      const newPage = action.payload;
      const { totalPages: totalPagesCurrent } = state.pagination;

      // Validar se a página está dentro dos limites
      if (newPage < 1 || newPage > totalPagesCurrent) {
        return state;
      }

      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: newPage,
        },
      };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
};
