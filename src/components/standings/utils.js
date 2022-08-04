import hockeyStandings from "../../data/hockeyStandings";

export const getTotalWins = () => {
  let totalWins = 0;
  hockeyStandings.regularSeason.forEach((item) => {
    totalWins += item.home.wins + item.visitor.wins;
  });
  return totalWins;
};
