import React from "react";
import { useDarkMode } from "../../hooks/useDarkMode";
import { lightTheme } from "../../util/theme";

// Define a default UI for filtering
function DefaultColumnFilter({ column: { filterValue, setFilter } }) {
  const [theme] = useDarkMode();
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
