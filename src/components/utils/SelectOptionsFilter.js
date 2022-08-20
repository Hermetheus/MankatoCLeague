import React from "react";

const SelectOptionsFilter = ({ column: { filterValue, setFilter } }) => {
  return (
    <select
      onChange={(e) => {
        setFilter(e.target.value || ""); // Set undefined to remove the filter entirely
      }}
      style={{ width: "100%" }}
      value={filterValue}
    >
      <option value="">All Seasons</option>
      <option value="2021-2022">2021-2022</option>
      <option value="2022-2023">2022-2023</option>
    </select>
  );
};

export default SelectOptionsFilter;
