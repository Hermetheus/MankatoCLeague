import React, { useEffect, useState } from "react";
import {
  createTheme,
  DoubleEliminationBracket,
  Match,
  SVGViewer,
} from "@g-loot/react-tournament-brackets";
import useWindowSize from "../hooks/useWindowSize";
import {
  lowerBracketFunc,
  upperBracketFunc,
} from "../data/DoubleEliminationData";
import { darkTheme, lightTheme } from "../util/theme";
import useBreakpoint, {
  SIZE_SM,
  SIZE_XS,
  SIZE_XXL,
} from "../hooks/useBreakpoint";
import TournamentTable from "./tournamentbracket/TournamentTable.js";

const TournamentBracket = ({ playoffData, theme }) => {
  const [lowerBracket, setLowerBracket] = useState(undefined);
  const [upperBracket, setUpperBracket] = useState(undefined);
  const breakpoint = useBreakpoint();
  const [height] = useWindowSize();
  const finalHeight = Math.max(height - 100, 500);

  const ToggleTheme = createTheme({
    textColor: {
      main: theme === "light" ? lightTheme.body : darkTheme.body,
      highlighted: "#07090D",
      dark: "#3E414D",
    },
    matchBackground: { wonColor: lightTheme.accent, lostColor: "#646C79" },
    score: {
      background: { wonColor: lightTheme.accent, lostColor: "#646C79" },
      text: { highlightedWonColor: "#198754", highlightedLostColor: "#DC3545" },
    },
    border: {
      color: "#CED1F2",
      highlightedColor: lightTheme.accent,
    },
    roundHeader: {
      backgroundColor:
        theme === "light" ? lightTheme.toggleBorder : darkTheme.toggleBorder,
      fontColor: theme === "light" ? "#000" : "#fff",
    },
    connectorColor: "#CED1F2",
    connectorColorHighlight: lightTheme.accent,
    svgBackground: theme === "light" ? lightTheme.body : darkTheme.body,
  });

  const getChampion = () => {
    let champion = "";
    playoffData.mankatoCLeague.hockeyStandings.playoffs.map((game) => {
      if (game.typeOfRound === "Championship") {
        return (champion =
          game.homeScore > game.visitorScore ? game.home : game.visitor);
      } else {
        return "";
      }
    });

    return champion;
  };
  useEffect(() => {
    setLowerBracket(
      lowerBracketFunc(playoffData.mankatoCLeague.hockeyStandings.playoffs)
    );
    setUpperBracket(
      upperBracketFunc(playoffData.mankatoCLeague.hockeyStandings.playoffs)
    );
  }, [playoffData.mankatoCLeague.hockeyStandings.playoffs]);

  return (
    <>
      {!!playoffData && !!upperBracket && !!lowerBracket && (
        <>
          {!!playoffData.mankatoCLeague.hockeyStandings.playoffs && (
            <>
              <div className="d-flex justify-content-center align-items-center m-3">
                <h1>{getChampion()} are your 2021-2022 Champions!</h1>
              </div>
              <div>
                {breakpoint !== SIZE_SM && breakpoint !== SIZE_XS && (
                  <DoubleEliminationBracket
                    matches={{
                      upper: upperBracket.filter((playoffData) => {
                        return playoffData !== undefined;
                      }),
                      lower: lowerBracket.filter((playoffData) => {
                        return playoffData !== undefined;
                      }),
                    }}
                    matchComponent={Match}
                    theme={ToggleTheme}
                    options={{
                      style: {
                        roundHeader: {
                          backgroundColor:
                            ToggleTheme.roundHeader.backgroundColor,
                          fontColor: ToggleTheme.roundHeader.fontColor,
                        },
                        connectorColor: ToggleTheme.connectorColor,
                        connectorColorHighlight:
                          ToggleTheme.connectorColorHighlight,
                      },
                    }}
                    svgWrapper={({ children, ...props }) => (
                      <SVGViewer
                        background={ToggleTheme.svgBackground}
                        SVGBackground={ToggleTheme.svgBackground}
                        width={breakpoint === SIZE_XXL ? "1250" : "1000"}
                        height={finalHeight}
                        {...props}
                      >
                        {children}
                      </SVGViewer>
                    )}
                  />
                )}
                <TournamentTable
                  data={playoffData.mankatoCLeague.hockeyStandings.playoffs}
                  theme={theme}
                />
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default TournamentBracket;
