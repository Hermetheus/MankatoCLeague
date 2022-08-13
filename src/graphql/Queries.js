import { gql } from "@apollo/client/core";

export const hockeyStandings = gql`
  {
    mankatoCLeague(id: "4ehgKVmIvVI6vV2nAq1pua") {
      hockeyStandings
    }
  }
`;

export const hockeyTeams = gql`
  query {
    mankatoCLeagueTeamsCollection {
      items {
        sponsor
        team
        teamPlayers
        teamPhoto {
          url
        }
        teamYear
        currentChampions
      }
    }
  }
`;
