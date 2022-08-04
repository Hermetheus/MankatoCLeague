import hockeyStandings from "../data/hockeyStandings";
import { Teams } from "./teams";

export const getTotalHomeWins = () => {
  let homeStats = {};
  let totalHomePoints;
  Object.keys(Teams).forEach((key) => {
    let totalHomeWins = hockeyStandings.regularSeason.filter(
      (game) => game.home === Teams[key] && game.homeScore > game.visitorScore
    ).length;

    totalHomePoints = totalHomeWins * 2;

    homeStats = {
      team: key,
      totalHomeWins: totalHomeWins,
      totalHomePoints: totalHomePoints,
    };
  });
  return homeStats;
};

export const getTotalVisitorWins = () => {
  let visitorStats = {};
  let totalVisitorPoints;
  Object.keys(Teams).forEach((key) => {
    let totalVisitorWins = hockeyStandings.regularSeason.filter(
      (game) =>
        game.visitor === Teams[key] && game.homeScore < game.visitorScore
    ).length;

    totalVisitorPoints = totalVisitorWins * 2;

    visitorStats = {
      team: key,
      totalVisitorWins: totalVisitorWins,
      totalVisitorPoints: totalVisitorPoints,
    };
  });
  return visitorStats;
};

export const getTotalVisitorTies = () => {
  let visitorTies = {};
  let totalVisitorTiePoints;
  Object.keys(Teams).forEach((key) => {
    let totalVisitorTies = hockeyStandings.regularSeason.filter(
      (game) =>
        game.visitor === Teams[key] && game.homeScore === game.visitorScore
    ).length;

    totalVisitorTiePoints = totalVisitorTies * 1;

    visitorTies = {
      team: key,
      totalVisitorTies: totalVisitorTies,
      totalVisitorTiePoints: totalVisitorTiePoints,
    };
  });
  return visitorTies;
};

export const getTotalHomeTies = () => {
  let homeTies = {};
  let totalHomeTiePoints;
  Object.keys(Teams).forEach((key) => {
    let totalHomeTies = hockeyStandings.regularSeason.filter(
      (game) => game.home === Teams[key] && game.homeScore === game.visitorScore
    ).length;
    totalHomeTiePoints = totalHomeTiePoints * 1;

    homeTies = {
      team: key,
      totalHomeTies: totalHomeTies,
      totalHomeTiePoints: totalHomeTiePoints,
    };
  });
  return homeTies;
};

export const getTotalHomeGoals = () => {
  let homeGoals = {};
  Object.keys(Teams).forEach((key) => {
    let totalHomeGoals = hockeyStandings.regularSeason
      .filter((game) => game.home === Teams[key] && game.homeScore)
      .reduce((a, b) => a + b.homeScore, 0);

    homeGoals = {
      team: key,
      totalHomeGoals: totalHomeGoals,
    };
  });
  return homeGoals;
};

export const getTotalVisitorGoals = () => {
  let visitorGoals = {};
  Object.keys(Teams).forEach((key) => {
    let totalHomePoints = hockeyStandings.regularSeason
      .filter((game) => game.visitor === Teams[key] && game.visitorScore)
      .reduce((a, b) => a + b.visitorScore, 0);

    visitorGoals = {
      team: key,
      totalHomePoints: totalHomePoints,
    };
  });
  return visitorGoals;
};
