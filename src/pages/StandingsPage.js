import React from "react";
import Standings from "../components/standings/Standings";

const StandingsPage = ({ theme }) => {
  return (
    <div>
      <Standings theme={theme} />
    </div>
  );
};

export default StandingsPage;
