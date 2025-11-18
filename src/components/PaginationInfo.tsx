import React from 'react';
import { useUsers } from '../context/UsersContext';

/**
 * Componente que exibe informações sobre a paginação
 */
export const PaginationInfo: React.FC = () => {
  const { state } = useUsers();
  const { currentPage, totalPages, itemsPerPage, totalItems } = state.pagination;

  const startItem = (currentPage - 1) * itemsPerPage + 1;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="pagination-info-container">
      <p>
        Exibindo <strong>{startItem}</strong> a <strong>{endItem}</strong> de{' '}
        <strong>{totalItems}</strong> usuários
      </p>
      <p>
        Página <strong>{currentPage}</strong> de <strong>{totalPages}</strong>
      </p>
    </div>
  );
};
