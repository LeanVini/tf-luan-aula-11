import React, { createContext, useContext, ReactNode } from 'react';
import { UsersState, UsersAction } from '../types';

/**
 * Interface que define o shape do contexto
 */
interface UsersContextType {
  state: UsersState;
  dispatch: React.Dispatch<UsersAction>;
}

/**
 * Contexto global de usuários
 */
export const UsersContext = createContext<UsersContextType | undefined>(undefined);

/**
 * Hook customizado para usar o contexto de usuários
 * @throws Error se utilizado fora do Provider
 */
export const useUsers = (): UsersContextType => {
  const context = useContext(UsersContext);
  
  if (!context) {
    throw new Error(
      'useUsers deve ser utilizado dentro de um <UsersProvider>'
    );
  }
  
  return context;
};
