import React from "react";
import { Table } from "react-bootstrap";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
} from "react-table";
import styled from "styled-components";
import hockeyStandings from "../../data/hockeyStandings";
import { darkTheme, lightTheme } from "../../util/theme";
import DefaultColumnFilter from "../utils/DefaultColumnFilter";
import GlobalFilter from "../utils/GlobalFilter";
import HomeScore from "./Renderers/HomeScore";
import VisitorScore from "./Renderers/VisitorScore";

const Standings = ({ theme }) => {
  const data = hockeyStandings.regularSeason;

  const Styles = styled.div`
    padding: 1rem;
    .lost {
      color: red;
    }

    .won {
      color: green;
    }

    .tie {
      color: blue;
    }

    table {
      border-spacing: 0;
      border: 1px solid black;

      tr {
        :last-child {
          td {
            border-bottom: 0;
          }
        }
      }

      th,
      td {
        margin: 0;
        padding: 0.5rem;
        border-bottom: 1px solid black;
        border-right: 1px solid black;

        :last-child {
          border-right: 0;
        }
      }
    }
  `;

  const columns = React.useMemo(
    () => [
      {
        Header: "Date and Time",
        columns: [
          {
            Header: "Date",
            accessor: "date",
          },
          {
            Header: "Time",
            accessor: "time",
            Cell: ({ value }) => {
              return <div>{value}</div>;
            },
          },
          {
            Header: "Time Keeper",
            accessor: "timeKeeper",
            Filter: false,
          },
        ],
      },
      {
        Header: "Teams",
        columns: [
          {
            Header: "Home Team",
            accessor: "home",
            Cell: (props) => <HomeScore {...props} />,
          },
          {
            Header: "Visitor Team",
            accessor: "visitor",
            Cell: (props) => <VisitorScore {...props} />,
          },
        ],
      },
      {
        Header: "Location",
        columns: [
          {
            Header: "Pond",
            accessor: "pond",
            Filter: false,
          },
        ],
      },

      {
        Header: "Score",
        columns: [
          {
            Header: "Home",
            accessor: "homeScore",
            style: { textAlign: "center" },
            Cell: (props) => <HomeScore {...props} />,
            Filter: false,
          },
          {
            Header: "Visitor",
            accessor: "visitorScore",
            Cell: (props) => <VisitorScore {...props} />,
            Filter: false,
          },
          {
            Header: "Official",
            accessor: "official",
          },
        ],
      },
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    rows,

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
    state: { pageIndex, pageSize, globalFilter },

    // Search / Filtering Props
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageindex: 2 },
      defaultColumn,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  const generateSortingIndicator = (column) => {
    return column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : "";
  };
  // Render the UI for your table
  return (
    <React.Fragment>
      <GlobalFilter
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <Table {...getTableProps()} striped bordered hover>
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
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
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
      {/*
	        Pagination can be built however you'd like.
	        This is just a very basic UI implementation:
	      */}
      <div className="float-right mb-3">
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
          className="btn btn-outline-primary"
          style={{ marginTop: "-4px" }}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {"<<"}
        </button>{" "}
        <button
          className="btn btn-outline-primary"
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
          className="btn btn-outline-primary"
          style={{ marginTop: "-4px" }}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {">"}
        </button>{" "}
        <button
          className="btn btn-outline-primary"
          style={{ marginTop: "-4px" }}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {">>"}
        </button>
      </div>
    </React.Fragment>
  );
};
export default Standings;
