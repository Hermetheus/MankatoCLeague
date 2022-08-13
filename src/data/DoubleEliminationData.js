const upperBracketFunc = (data) =>
  data.map((match) => {
    if (match.bracketLevel === "upper") {
      return {
        id: match.id,
        name: `${match.home} vs ${match.visitor}`,
        nextMatchId: match.nextMatch,
        nextLooserMatchId: match.nextLoserMatch,
        tournamentRoundText: match.tournamentRound,
        starttime: match.date,
        state: "SCORE_DONE",
        participants: [
          {
            id: match.home,
            resultText: match.homeScore,
            isWinner: match.homeScore > match.visitorScore,
            status: "PLAYED",
            name: match.home,
          },
          {
            id: match.visitor,
            resultText: match.visitorScore,
            isWinner: match.visitorScore > match.homeScore,
            status: "PLAYED",
            name: match.visitor,
          },
        ],
      };
    }
  });

const lowerBracketFunc = (data) =>
  data.map((match) => {
    if (match.bracketLevel === "lower") {
      return {
        id: match.id,
        name: `${match.home} vs ${match.visitor}`,
        nextMatchId: match.nextMatch,
        nextLooserMatchId: match.nextLoserMatch,
        tournamentRoundText: match.tournamentRound,
        starttime: match.date,
        state: "SCORE_DONE",
        participants: [
          {
            id: match.home,
            resultText: match.homeScore,
            isWinner: match.homeScore > match.visitorScore,
            status: "PLAYED",
            name: match.home,
          },
          {
            id: match.visitor,
            resultText: match.visitorScore,
            isWinner: match.visitorScore > match.homeScore,
            status: "PLAYED",
            name: match.visitor,
          },
        ],
      };
    }
  });

export { upperBracketFunc, lowerBracketFunc };
