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
import useBreakpoint, { SIZE_SM, SIZE_XS } from "../hooks/useBreakpoint";
import TournamentTable from "./tournamentbracket/TournamentTable.js";

const TournamentBracket = ({ theme }) => {
  const breakpoint = useBreakpoint();
  const [width, height] = useWindowSize();
  const finalWidth = Math.max(width - 50, 500);
  const finalHeight = Math.max(height - 100, 500);

  const ToggleTheme = createTheme({
    textColor: {
      main: theme === "light" ? lightTheme.body : darkTheme.body,
      highlighted: "#07090D",
      dark: "#3E414D",
    },
    matchBackground: { wonColor: "#daebf9", lostColor: "#96c6da" },
    score: {
      background: { wonColor: "#87b2c4", lostColor: "#87b2c4" },
      text: { highlightedWonColor: "#7BF59D", highlightedLostColor: "#FB7E94" },
    },
    border: {
      color: "#CED1F2",
      highlightedColor: "#da96c6",
    },
    roundHeader: { backgroundColor: "#da96c6", fontColor: "#000" },
    connectorColor: "#CED1F2",
    connectorColorHighlight: "#da96c6",
    svgBackground: theme === "light" ? lightTheme.body : darkTheme.body,
  });

  const lowerData = lowerBracket;
  const upperData = upperBracket;

  console.log({
    lower: lowerData.filter((data) => {
      return data !== undefined;
    }),
    upper: upperBracket.filter((data) => {
      return data !== undefined;
    }),
  });

  console.log(breakpoint);

  return (
    <>
      {/* doesn't show on mobile */}

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
              width={finalWidth}
              height={finalHeight}
              {...props}
            >
              {children}
            </SVGViewer>
          )}
        />
      )}
      <TournamentTable />
      {breakpoint === SIZE_SM && breakpoint === SIZE_XS && <TournamentTable />}
    </>
  );
};

export default TournamentBracket;
