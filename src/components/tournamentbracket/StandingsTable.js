import React, { useEffect, useState } from "react";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import { Table } from "react-bootstrap";
import getStandings from "../../util/hockeyStandingsData";
import { lightTheme } from "../../util/theme";
import GlobalFilter from "../utils/GlobalFilter";
import DefaultColumnFilter from "../utils/DefaultColumnFilter";

const StandingsTable = (data, { theme }) => {
  const [standingsData, setStandingsData] = useState({});

  useEffect(() => {
    setStandingsData(getStandings(data));
  }, [data]);

  console.log(standingsData);

  const columns = React.useMemo(() => [
    {
      Header: "Standings",
      columns: [
        {
          Header: "Home Wins",
          accessor: "homeWins",
        },
      ],
    },
    [],
  ]);

  const initialState = {
    pageindex: 2,
  };

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  // const {
  //   getTableProps,
  //   getTableBodyProps,
  //   headerGroups,
  //   prepareRow,
  //   page,

  //   // Pagination Props
  //   // The rest of these things are super handy, too ;)
  //   canPreviousPage,
  //   canNextPage,
  //   pageOptions,
  //   pageCount,
  //   gotoPage,
  //   nextPage,
  //   previousPage,
  //   setPageSize,
  //   state: { pageIndex, pageSize, globalFilter },
  //   // Search / Filtering Props
  //   preGlobalFilteredRows,
  //   setGlobalFilter,
  // } = useTable(
  //   {
  //     columns,
  //     data,
  //     initialState,
  //     defaultColumn,
  //   },
  //   useFilters,
  //   useGlobalFilter,
  //   useSortBy,
  //   usePagination
  // );
  // const generateSortingIndicator = (column) => {
  //   return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  // };

  // Render the UI for your table
  return (
    <React.Fragment>
      {/* <div className="mt-5">
        <h1>Tournament Statistics</h1>
        <hr
          style={{
            color: lightTheme.accent,
          }}
        />{" "}
      </div>
      <>
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
          theme={theme}
        />

        <Table
          {...getTableProps()}
          responsive
          striped
          bordered
          hover
          variant={theme}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{ verticalAlign: "middle" }}
                  >
                    <div {...column.getSortByToggleProps()}>
                      {column.render("Header")}
                      {generateSortingIndicator(column)}
                    </div>
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody {...getTableBodyProps()}>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </Table>
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
      </> */}
    </React.Fragment>
  );
};

export default StandingsTable;
