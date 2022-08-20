import moment from "moment";
import React from "react";
import { Table } from "react-bootstrap";
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from "react-table";
import useBreakpoint, {
  SIZE_LG,
  SIZE_MD,
  SIZE_XL,
  SIZE_XXL,
} from "../../hooks/useBreakpoint";
import { lightTheme } from "../../util/theme";
import HomeScore from "../standings/Renderers/HomeScore";
import VisitorScore from "../standings/Renderers/VisitorScore";
import DefaultColumnFilter from "../utils/DefaultColumnFilter";
import GlobalFilter from "../utils/GlobalFilter";
import SelectOptionsFilter from "../utils/SelectOptionsFilter";

const TournamentTable = ({ data, theme }) => {
  const breakpoint = useBreakpoint();

  const columns = React.useMemo(
    () => [
      {
        Header: "Date and Time",
        columns: [
          {
            Header: "Date",
            accessor: "date",
            Cell: ({ value }) => {
              function xlSerialToJsDate(value) {
                return new Date(
                  -2209075200000 + (value - (value < 61 ? 0 : 1)) * 86400000
                );
              }

              const formatDate = moment(xlSerialToJsDate(value)).format(
                "MM/DD/YYYY"
              );

              return <div>{formatDate}</div>;
            },
            Filter: false,
          },
          {
            Header: "Time",
            accessor: "time",
            Cell: ({ value }) => {
              const hoursInTheDay = (value * 24) / 1;

              function convert(input) {
                let time = moment(input, "HH:mm:ss").format("h:mm A");
                if (time === "Invalid date") {
                  return "Not Available";
                } else {
                  return time;
                }
              }

              return <div>{convert(hoursInTheDay)}</div>;
            },
            Filter: false,
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
        Header: "Playoffs",
        columns: [
          {
            Header: "Round",
            accessor: "typeOfRound",
            Cell: ({ value }) => {
              if (value === "Championship") {
                return <div className="text-success">{value}</div>;
              } else if (value === "Semi-Finals") {
                return <div className="text-warning">{value}</div>;
              } else {
                return <div>{value}</div>;
              }
            },
          },
          {
            Header: "Winner",
            accessor: "tournamentRound",
            Cell: (props) => {
              if (props.row.original.typeOfRound === "Championship") {
                return (
                  <div className="text-success">
                    {props.row.original.homeScore >
                    props.row.original.visitorScore
                      ? props.row.original.home
                      : props.row.original.visitor}{" "}
                    are your Championship Winners!
                  </div>
                );
              } else if (props.row.original.typeOfRound === "Semi-Finals") {
                return (
                  <div className="text-warning">
                    {props.row.original.homeScore >
                    props.row.original.visitorScore
                      ? props.row.original.home
                      : props.row.original.visitor}{" "}
                    got Second Place!
                  </div>
                );
              } else {
                return (
                  <div>
                    {props.row.original.homeScore >
                    props.row.original.visitorScore
                      ? props.row.original.home
                      : props.row.original.visitor}{" "}
                  </div>
                );
              }
            },
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
      {
        Header: "Year",
        columns: [
          {
            Header: "Year",
            accessor: "year",
            Filter: SelectOptionsFilter,
          },
        ],
      },
    ],
    []
  );

  const largeBreakpoints =
    breakpoint === SIZE_MD &&
    breakpoint === SIZE_LG &&
    breakpoint === SIZE_XL &&
    breakpoint === SIZE_XXL;

  const initialState = {
    hiddenColumns: largeBreakpoints ? [] : ["timeKeeper", "official", "pond"],
    pageindex: 2,
  };

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
      initialState,
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
      <div className="mt-5">
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
      </>
    </React.Fragment>
  );
};

export default TournamentTable;
