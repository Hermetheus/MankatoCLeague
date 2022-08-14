import React, { useCallback, useEffect, useState } from "react";
import Schedule from "../components/Schedule";
import { hockeyStandings } from "../graphql/Queries";
import { useQuery } from "@apollo/client";
import Loading from "../components/layout/Loading";

const SchedulePage = ({ theme }) => {
  const [scheduleData, setScheduleData] = useState(undefined);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const { loading, data } = useQuery(hockeyStandings);

  const getScheduleData = useCallback(() => {
    if (!!data && loading === false) {
      let combinedSchedule = [].concat(
        data.mankatoCLeague.hockeyStandings.regularSeason,
        data.mankatoCLeague.hockeyStandings.Playoffs
      );
      setScheduleData(combinedSchedule);
    }
  }, [data, loading]);

  useEffect(() => {
    if (loadingStatus === true && loading === false) {
      getScheduleData();
      setLoadingStatus(false);
    }
  }, [data, getScheduleData, loading, loadingStatus]);
  return (
    <>
      <h1>Schedule</h1>
      <hr
        style={{
          color: theme.accent,
        }}
      />{" "}
      {!!loadingStatus && <Loading />}
      {!!scheduleData && <Schedule data={scheduleData} theme={theme} />}
    </>
  );
};

export default SchedulePage;
