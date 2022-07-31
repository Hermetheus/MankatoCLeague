import React from "react";
import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import Index from "../../pages";
import Footer from "./Footer";
import Header from "./Header";
import TeamsPage from "../../pages/TeamsPage";
import StandingsPage from "../../pages/StandingsPage";
import TournamentPage from "../../pages/TournamentPage";

const PageLayout = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header toggleTheme={toggleTheme} />
      <Container>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/teams" element={<TeamsPage />} />
          <Route path="/standings" element={<StandingsPage theme={theme} />} />
          <Route
            path="/tournamentBracket"
            element={<TournamentPage theme={theme} />}
          />
        </Routes>
      </Container>
      <Footer />
    </>
  );
};

export default PageLayout;
