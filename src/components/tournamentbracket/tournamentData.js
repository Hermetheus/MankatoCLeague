import hockeyStandings from "../../data/hockeyStandings";

const data = hockeyStandings.Playoffs;

const doubleElimination = {
  upper: [
    {
      id: 20512,
      name: "Semi Final",
      nextMatchId: 20515,
      nextLooserMatchId: 20502,
      tournamentRoundText: "Final",
      starttime: data.time,
      state: "SCORE_DONE",
      participants: [
        {
          id: "a3c107d2-ded2-4f33-85e7-2215805f664b",
          resultText: data.homeScore,
          isWinner: data.homeScore > data.visitorScore,
          status: "PLAYED",
          name: data.home,
        },
        {
          id: "a3fb4b05-d4ee-4efe-84cf-b500cdbdbbe0",
          resultText: data.visitorScore,
          isWinner: data.visitorScore > data.homeScore,
          status: "PLAYED",
          name: data.visitor,
        },
      ],
    },
  ],
};

export default doubleElimination;
