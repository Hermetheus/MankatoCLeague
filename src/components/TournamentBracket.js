import React from "react";
import {
  createTheme,
  DoubleEliminationBracket,
  Match,
  SVGViewer,
} from "@g-loot/react-tournament-brackets";
import useWindowSize from "../hooks/useWindowSize";
import { lowerBracket, upperBracket } from "../data/DoubleEliminationData";
import { darkTheme, lightTheme } from "../util/theme";
import useBreakpoint, {
  SIZE_SM,
  SIZE_XS,
  SIZE_XXL,
} from "../hooks/useBreakpoint";
import TournamentTable from "./tournamentbracket/TournamentTable.js";
import hockeyStandings from "../data/hockeyStandings";

const TournamentBracket = ({ theme }) => {
  const breakpoint = useBreakpoint();
  const [height] = useWindowSize();
  const data = hockeyStandings.Playoffs;
  const finalHeight = Math.max(height - 100, 500);

  const ToggleTheme = createTheme({
    textColor: {
      main: theme === "light" ? lightTheme.body : darkTheme.body,
      highlighted: "#07090D",
      dark: "#3E414D",
    },
    matchBackground: { wonColor: "#FB9039", lostColor: "#646C79" },
    score: {
      background: { wonColor: "#FB9039", lostColor: "#646C79" },
      text: { highlightedWonColor: "#198754", highlightedLostColor: "#DC3545" },
    },
    border: {
      color: "#CED1F2",
      highlightedColor: "#FB9039",
    },
    roundHeader: {
      backgroundColor: "#1F3044",
      fontColor: theme === "light" ? "#000" : "#fff",
    },
    connectorColor: "#CED1F2",
    connectorColorHighlight: "#FB9039",
    svgBackground: theme === "light" ? lightTheme.body : darkTheme.body,
  });

  const lowerData = lowerBracket;
  const upperData = upperBracket;

  const getChampion = () => {
    let champion = "";
    data.map((game) => {
      if (game.typeOfRound === "Championship") {
        return (champion =
          game.homeScore > game.visitorScore ? game.home : game.visitor);
      } else {
        return "";
      }
    });

    return champion;
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center m-3">
        <h1>{getChampion()} are your 2021-2023 Champions!</h1>
      </div>
      {/* doesn't show on mobile */}
      <div>
        {breakpoint !== SIZE_SM && breakpoint !== SIZE_XS && (
          <DoubleEliminationBracket
            matches={{
              upper: upperData.filter((data) => {
                return data !== undefined;
              }),
              lower: lowerData.filter((data) => {
                return data !== undefined;
              }),
            }}
            matchComponent={Match}
            theme={ToggleTheme}
            options={{
              style: {
                roundHeader: {
                  backgroundColor: ToggleTheme.roundHeader.backgroundColor,
                  fontColor: ToggleTheme.roundHeader.fontColor,
                },
                connectorColor: ToggleTheme.connectorColor,
                connectorColorHighlight: ToggleTheme.connectorColorHighlight,
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
        <TournamentTable theme={theme} />
      </div>
    </>
  );
};

export default TournamentBracket;
