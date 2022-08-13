import React from "react";
import { usePagination, useTable } from "react-table";

const Pagination = () => {
  const {
    // Pagination Props
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(usePagination);
  return (
    <div className="d-flex justify-content-center align-items-center m-3">
      <select
        style={{
          padding: "7px",
          borderRadius: "3px",
          border: "1px solid #007bff",
        }}
        value={pageSize}
        onChange={(e) => {
          setPageSize(Number(e.target.value));
        }}
      >
        {[10, 20, 30, 40, 50].map((pageSize) => (
          <option key={pageSize} value={pageSize}>
            Show {pageSize}
          </option>
        ))}
      </select>{" "}
      <button
        className="btn btn-outline-primary m-1"
        style={{ marginTop: "-4px" }}
        onClick={() => gotoPage(0)}
        disabled={!canPreviousPage}
      >
        {"<<"}
      </button>{" "}
      <button
        className="btn btn-outline-primary m-1"
        style={{ marginTop: "-4px" }}
        onClick={() => previousPage()}
        disabled={!canPreviousPage}
      >
        {"<"}
      </button>{" "}
      <span>
        Page{" "}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{" "}
      </span>
      <button
        className="btn btn-outline-primary m-1"
        style={{ marginTop: "-4px" }}
        onClick={() => nextPage()}
        disabled={!canNextPage}
      >
        {">"}
      </button>{" "}
      <button
        className="btn btn-outline-primary m-1"
        style={{ marginTop: "-4px" }}
        onClick={() => gotoPage(pageCount - 1)}
        disabled={!canNextPage}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Pagination;
