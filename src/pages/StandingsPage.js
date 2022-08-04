import React, { useState } from "react";
import Standings from "../components/Standings";
import hockeyStandings from "../data/hockeyStandings";
import { useDarkMode } from "../hooks/useDarkMode";
import { Teams } from "../util/teams";

const StandingsPage = () => {
  const [homeWins, setHomeWins] = useState({});
  const [theme] = useDarkMode();

  const getTotalHomeWins = () => {
    for (var key of Object.keys(Teams)) {
      hockeyStandings.regularSeason.forEach((item) => {
        if (Teams[key] === item.home) {
          if (item.homeScore > item.visitorScore) {
            console.log(hockeyStandings.regularSeason.home);
            setHomeWins(item.homeScore.length);
          }
        }
      });
    }
    // if (hockeyStandings.regularSeason.home === Teams[i]) {
    //   console.log(Teams[i] === hockeyStandings.regularSeason.home);
    //   // const homeWins =
    //   hockeyStandings.regularSeason.homeScore >
    //   hockeyStandings.regularSeason.visitorScore;
    // i++;

    // setHomeWins(homeWins);
  };

  // if (hockeyStandings.regularSeason.home === Teams[i]) {
  //   return Teams;
  // const homeWins =
  //   hockeyStandings.regularSeason.homeScore >
  //   hockeyStandings.regularSeason.visitorScore;

  // const visitorWins =
  //   hockeyStandings.regularSeason.visitorScore >
  //   hockeyStandings.regularSeason.homeScore;

  // totalWins = homeWins

  // return totalWins;
  // };

  console.log(getTotalHomeWins());

  return (
    <div>
      <Standings theme={theme} />
    </div>
  );
};

export default StandingsPage;
