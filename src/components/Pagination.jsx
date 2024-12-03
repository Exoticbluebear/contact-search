import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handleClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  return (
    <div className="mt-4 flex justify-end">
      <button
        onClick={() => handleClick(currentPage - 1)}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <span className="px-4 py-2 bg-blue-500 text-white rounded">
        {currentPage}
      </span>
      <button
        onClick={() => handleClick(currentPage + 1)}
        className="px-4 py-2 mx-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
