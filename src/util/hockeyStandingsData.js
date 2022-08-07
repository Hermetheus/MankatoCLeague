import hockeyStandings from "../data/hockeyStandings";
import { Teams } from "./teams";

export const getTotalHomeWins = () => {
  let homeStats = [];
  let totalHomePoints;
  Object.keys(Teams).forEach((key) => {
    let totalHomeWins = hockeyStandings.regularSeason.filter(
      (game) => game.home === Teams[key] && game.homeScore > game.visitorScore
    ).length;

    totalHomePoints = totalHomeWins * 2;

    homeStats.push([
      {
        team: key,
        totalHomeWins: totalHomeWins,
        totalHomePoints: totalHomePoints,
      },
    ]);
  });
  return homeStats;
};

export const getTotalVisitorWins = () => {
  let visitorStats = [];
  let totalVisitorPoints;
  Object.keys(Teams).forEach((key) => {
    let totalVisitorWins = hockeyStandings.regularSeason.filter(
      (game) =>
        game.visitor === Teams[key] && game.homeScore < game.visitorScore
    ).length;

    totalVisitorPoints = totalVisitorWins * 2;

    visitorStats.push([
      {
        team: key,
        totalVisitorWins: totalVisitorWins,
        totalVisitorPoints: totalVisitorPoints,
      },
    ]);
  });
  return visitorStats;
};

export const getTotalVisitorTies = () => {
  let visitorTies = [];
  Object.keys(Teams).forEach((key) => {
    let totalVisitorTies = hockeyStandings.regularSeason.filter(
      (game) =>
        game.visitor === Teams[key] && game.homeScore === game.visitorScore
    ).length;

    visitorTies.push([
      {
        team: key,
        totalVisitorTies: totalVisitorTies,
        totalVisitorTiePoints: totalVisitorTies,
      },
    ]);
  });
  return [visitorTies];
};

export const getTotalHomeTies = () => {
  let homeTies = [];
  Object.keys(Teams).forEach((key) => {
    let totalHomeTies = hockeyStandings.regularSeason.filter(
      (game) => game.home === Teams[key] && game.homeScore === game.visitorScore
    ).length;

    homeTies.push([
      {
        team: key,
        totalHomeTies: totalHomeTies,
        totalHomeTiePoints: totalHomeTies,
      },
    ]);
  });
  return homeTies;
};

export const getTotalHomeGoals = () => {
  let homeGoals = [];
  Object.keys(Teams).forEach((key) => {
    let totalHomeGoals = hockeyStandings.regularSeason
      .filter((game) => game.home === Teams[key] && game.homeScore)
      .reduce((a, b) => a + b.homeScore, 0);

    homeGoals.push([
      {
        team: key,
        totalHomeGoals: totalHomeGoals,
      },
    ]);
  });
  return homeGoals;
};

export const getTotalVisitorGoals = () => {
  let totalVisitorGoals = [];
  Object.keys(Teams).forEach((key) => {
    let visitorGoals = hockeyStandings.regularSeason
      .filter((game) => game.visitor === Teams[key] && game.visitorScore)
      .reduce((a, b) => a + b.visitorScore, 0);

    totalVisitorGoals.push([
      {
        team: key,
        visitorGoals: visitorGoals,
      },
    ]);
  });
  return totalVisitorGoals;
};

export const getTotalHomeGoalsAgainst = () => {
  let totalHomeGoalsAgainst = [];
  Object.keys(Teams).forEach((key) => {
    let homeGoalsAgainst = hockeyStandings.regularSeason
      .filter((game) => game.home === Teams[key] && game.visitorScore)
      .reduce((a, b) => a + b.visitorScore, 0);

    totalHomeGoalsAgainst.push([
      {
        team: key,
        homeGoalsAgainst: homeGoalsAgainst,
      },
    ]);
  });
  return totalHomeGoalsAgainst;
};

export const getTotalVisitorGoalsAgainst = () => {
  let visitorGoalsAgainst = [];
  Object.keys(Teams).forEach((key) => {
    let totalHomePoints = hockeyStandings.regularSeason
      .filter((game) => game.visitor === Teams[key] && game.homeScore)
      .reduce((a, b) => a + b.homeScore, 0);

    visitorGoalsAgainst.push([
      {
        team: key,
        totalHomePoints: totalHomePoints,
      },
    ]);
  });
  return visitorGoalsAgainst;
};

export const allStandingsData = {
  homeWins: getTotalHomeWins(),
  visitorWins: getTotalVisitorWins(),
  homeTies: getTotalHomeTies(),
  visitorTies: getTotalVisitorTies(),
  homeGoals: getTotalHomeGoals(),
  visitorGoals: getTotalVisitorGoals(),
  homeGoalsAgainst: getTotalHomeGoalsAgainst(),
  visitorGoalsAgainst: getTotalVisitorGoalsAgainst(),
};
