import moment from "moment";

const upperBracketFunc = (data) =>
  data.map((match) => {
    function xlSerialToJsDate(value) {
      return new Date(
        -2209075200000 + (value - (value < 61 ? 0 : 1)) * 86400000
      );
    }

    const formatDate = moment(xlSerialToJsDate(match.date)).format(
      "YYYY/MM/DD"
    );

    if (match.bracketLevel === "upper") {
      console.log(match.nextLoserMatch);

      return {
        id: match.id,
        name: `${match.home} vs ${match.visitor}`,
        nextMatchId: match.nextMatch,
        nextLooserMatchId: match.nextLoserMatch,
        tournamentRoundText: match.tournamentRound,
        starttime: formatDate,
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
    } else {
      return null;
    }
  });

const lowerBracketFunc = (data) =>
  data.map((match) => {
    function xlSerialToJsDate(value) {
      return new Date(
        -2209075200000 + (value - (value < 61 ? 0 : 1)) * 86400000
      );
    }

    const formatDate = moment(xlSerialToJsDate(match.date)).format(
      "YYYY-MM-DD"
    );

    if (match.bracketLevel === "lower") {
      return {
        id: match.id,
        name: `${match.home} vs ${match.visitor}`,
        nextMatchId: match.nextMatch,
        nextLooserMatchId: match.nextLoserMatch,
        tournamentRoundText: match.tournamentRound,
        starttime: formatDate,
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
    } else {
      return null;
    }
  });

export { upperBracketFunc, lowerBracketFunc };
