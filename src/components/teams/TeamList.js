import { useQuery } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { hockeyTeams } from "../../graphql/Queries";
import EachTeam from "./EachTeam";

const TeamList = () => {
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [teamData, setTeamData] = useState([]);
  const { error, loading, data } = useQuery(hockeyTeams);

  useEffect(() => {
    if (loadingStatus === true && loading === false) {
      setTeamData(data);

      setLoadingStatus(false);
    }
  }, [data, loading, loadingStatus]);

  return (
    <>
      {!!loadingStatus ? (
        <span>Loading...</span>
      ) : (
        <>
          {!!data &&
            !!teamData &&
            loadingStatus === false &&
            loading === false && (
              <Row>
                {teamData.mankatoCLeagueTeamsCollection.items.map((item) => {
                  return <EachTeam team={item} />;
                })}
              </Row>
            )}
        </>
      )}
    </>
  );
};

export default TeamList;
