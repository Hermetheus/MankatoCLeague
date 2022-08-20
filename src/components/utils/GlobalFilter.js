import React from "react";
import { useState } from "react";
import { useAsyncDebounce } from "react-table";
import { lightTheme } from "../../util/theme";

function GlobalFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <div className="p-2">
      <span>
        Search All:{" "}
        <input
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          style={{
            width: "150px",
            border: `1px solid ${lightTheme.accent}`,
            borderRadius: "6px",
            fontSize: "20px",
            padding: "2px",
            marginTop: "-10px",
          }}
        />
      </span>
    </div>
  );
}

export default GlobalFilter;
