import React from "react";
import { lightTheme } from "../../util/theme";

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
  return (
    <input
      value={filterValue || ""}
      style={{
        width: "125px",
        border: `1px solid ${lightTheme.accent}`,
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
