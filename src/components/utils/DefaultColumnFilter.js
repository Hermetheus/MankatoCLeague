import React from "react";

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
  console.log(filterValue);
  return (
    <input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      placeholder={`Filter...`}
    />
  );
}

export default DefaultColumnFilter;
