import React from "react";
import Schedule from "../components/Schedule";

const SchedulePage = ({ theme }) => {
  return (
    <>
      <h1>Schedule</h1>
      <hr />
      <Schedule theme={theme} />
    </>
  );
};

export default SchedulePage;
