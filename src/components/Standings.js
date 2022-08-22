import React, { useEffect } from "react";
import TournamentBracket from "./TournamentBracket";
import StandingsTable from "./tournamentbracket/StandingsTable";
import { useQuery } from "@apollo/client/react";
import { hockeyStandings } from "../graphql/Queries";
import { useState } from "react";
import Loading from "./layout/Loading";

const Standings = ({ theme }) => {
  const [seasonData, setSeasonData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const { loading, data } = useQuery(hockeyStandings);

  useEffect(() => {
    if (loadingStatus === true && loading === false) {
      setSeasonData(data);
      setLoadingStatus(false);
    }
  }, [data, loading, loadingStatus]);

  return (
    <>
      {loadingStatus === true && <Loading />}
      {loadingStatus === false && (
        <>
          <StandingsTable data={seasonData} theme={theme} />
          <TournamentBracket playoffData={seasonData} theme={theme} />
        </>
      )}
    </>
  );
};
export default Standings;
