import React from "react";
import { Route, Routes } from "react-router";
import { Container } from "react-bootstrap";
import Index from "../../pages";
import Footer from "./Footer";
import Header from "./Header";
import TeamsPage from "../../pages/TeamsPage";
import StandingsPage from "../../pages/StandingsPage";
import SchedulePage from "../../pages/SchedulePage";
import PhotoPage from "../../pages/PhotoPage";

const PageLayout = ({ theme, toggleTheme }) => {
  return (
    <>
      <Header theme={theme} />
      <Container>
        <Routes>
          <Route path="/" element={<Index theme={theme} />} />
          <Route path="/teams" element={<TeamsPage theme={theme} />} />
          <Route path="/schedule" element={<SchedulePage theme={theme} />} />
          <Route path="/standings" element={<StandingsPage theme={theme} />} />
          <Route path="/photos" element={<PhotoPage theme={theme} />} />
        </Routes>
      </Container>
      <Footer toggleTheme={toggleTheme} theme={theme} />
    </>
  );
};

export default PageLayout;
