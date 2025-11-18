import React from 'react';
import { useUsers } from '../context/UsersContext';

/**
 * Componente de paginação
 * Controla a navegação entre páginas de usuários
 */
export const Pagination: React.FC = () => {
  const { state, dispatch } = useUsers();
  const { currentPage, totalPages } = state.pagination;

  if (totalPages <= 1) {
    return null;
  }

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch({
        type: 'CHANGE_PAGE',
        payload: currentPage - 1,
      });
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch({
        type: 'CHANGE_PAGE',
        payload: currentPage + 1,
      });
    }
  };

  const handlePageClick = (page: number) => {
    dispatch({
      type: 'CHANGE_PAGE',
      payload: page,
    });
  };

  /**
   * Gera array de números de página para exibição
   */
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Sempre mostrar primeira página
      pages.push(1);

      // Calcular intervalo de páginas ao redor da atual
      let start = Math.max(2, currentPage - 1);
      let end = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        end = 4;
      } else if (currentPage >= totalPages - 1) {
        start = totalPages - 3;
      }

      if (start > 2) {
        pages.push('...');
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push('...');
      }

      // Sempre mostrar última página
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className="pagination">
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        className="pagination-button"
      >
        ← Anterior
      </button>

      <div className="pagination-pages">
        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && handlePageClick(page)}
            disabled={page === '...'}
            className={`pagination-page ${
              page === currentPage ? 'active' : ''
            } ${page === '...' ? 'ellipsis' : ''}`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="pagination-button"
      >
        Próxima →
      </button>

      <span className="pagination-info">
        Página {currentPage} de {totalPages}
      </span>
    </div>
  );
};
