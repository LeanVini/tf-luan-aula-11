import React, { useReducer, ReactNode } from 'react';
import { UsersContext } from './UsersContext';
import { usersReducer, initialState } from './usersReducer';

/**
 * Props do UsersProvider
 */
interface UsersProviderProps {
  children: ReactNode;
}

/**
 * Provider que encapsula o contexto global de usuários
 * Disponibiliza o estado e dispatch para todos os componentes filhos
 */
export const UsersProvider: React.FC<UsersProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(usersReducer, initialState);

  const value = {
    state,
    dispatch,
  };

  return (
    <UsersContext.Provider value={value}>
      {children}
    </UsersContext.Provider>
  );
};
