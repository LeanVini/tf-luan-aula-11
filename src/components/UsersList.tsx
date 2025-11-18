import React, { useEffect } from 'react';
import { useUsers } from '../context/UsersContext';
import { User } from '../types';

/**
 * Componente que exibe a lista de usuários
 * Consome o contexto global de usuários
 */
export const UsersList: React.FC = () => {
  const { state, dispatch } = useUsers();
  const { users, loading, error } = state;

  /**
   * Simula o carregamento de usuários
   * Em uma aplicação real, aqui seria feita uma chamada à API
   */
  useEffect(() => {
    const loadUsers = async () => {
      dispatch({ type: 'SET_LOADING', payload: true });

      try {
        // Simular delay da API
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Dados simulados
        const mockUsers: User[] = [
          {
            id: 1,
            name: 'João Silva',
            email: 'joao@example.com',
            phone: '(11) 98765-4321',
            company: 'Tech Corp',
          },
          {
            id: 2,
            name: 'Maria Santos',
            email: 'maria@example.com',
            phone: '(11) 98765-4322',
            company: 'Design Inc',
          },
          {
            id: 3,
            name: 'Pedro Oliveira',
            email: 'pedro@example.com',
            phone: '(11) 98765-4323',
            company: 'Dev Solutions',
          },
          {
            id: 4,
            name: 'Ana Costa',
            email: 'ana@example.com',
            phone: '(11) 98765-4324',
            company: 'Marketing Pro',
          },
          {
            id: 5,
            name: 'Carlos Souza',
            email: 'carlos@example.com',
            phone: '(11) 98765-4325',
            company: 'Finance Ltd',
          },
        ];

        dispatch({
          type: 'SET_USERS',
          payload: {
            users: mockUsers,
            totalItems: mockUsers.length,
          },
        });
      } catch (err) {
        dispatch({
          type: 'SET_ERROR',
          payload: err instanceof Error ? err.message : 'Erro ao carregar usuários',
        });
      }
    };

    loadUsers();
  }, [dispatch]);

  if (loading) {
    return <div className="loading">Carregando usuários...</div>;
  }

  if (error) {
    return <div className="error">Erro: {error}</div>;
  }

  if (users.length === 0) {
    return <div className="no-users">Nenhum usuário encontrado</div>;
  }

  return (
    <div className="users-list">
      <h2>Lista de Usuários</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Empresa</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone || '-'}</td>
              <td>{user.company || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
