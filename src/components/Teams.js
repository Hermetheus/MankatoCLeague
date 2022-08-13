import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import hockeyTeams from "../data/hockeyTeams";
import TeamList from "./teams/TeamList";

const Teams = () => {
  const teams = hockeyTeams.teams;

  return (
    <>
      <TeamList />
    </>
  );
};

export default Teams;
