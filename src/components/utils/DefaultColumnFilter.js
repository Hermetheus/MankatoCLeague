import React from "react";

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
  return (
    <input
      value={filterValue || ""}
      style={{
        width: "125px",
        border: "2px solid #000000",
        borderRadius: "6px",
        fontSize: "14px",
        padding: "2px",
        marginTop: "-10px",
      }}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Filter...`}
    />
  );
}

export default DefaultColumnFilter;
