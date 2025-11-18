import React from 'react';
import { UsersProvider } from './context/UsersProvider';
import { UsersList } from './components/UsersList';
import { Pagination } from './components/Pagination';
import { PaginationInfo } from './components/PaginationInfo';
import './App.css';

/**
 * Componente principal da aplicação
 */
const App: React.FC = () => {
  return (
    <UsersProvider>
      <div className="app">
        <header className="app-header">
          <h1>Gerenciador de Usuários</h1>
          <p>Controle centralizado de usuários com paginação</p>
        </header>

        <main className="app-main">
          <UsersList />
          <PaginationInfo />
          <Pagination />
        </main>

        <footer className="app-footer">
          <p>&copy; 2025 Gerenciador de Usuários</p>
        </footer>
      </div>
    </UsersProvider>
  );
};

export default App;
