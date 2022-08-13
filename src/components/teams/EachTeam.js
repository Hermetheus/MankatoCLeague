import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const EachTeam = ({ team }) => {
  return (
    <Col lg="6">
      <div className="m-1 p-2">
        <div className="">
          <h1 className="teams-title justify-content-center align-items-center d-flex text-center m-2">
            {team.sponsor} {team.team}
          </h1>
          <h2 className="teams-title d-flex justify-content-center align-items-center m-2">
            {team.teamYear}
          </h2>
        </div>
        <hr />
        <Row className="">
          {team.teamPlayers.map((player) => {
            return (
              <Col fluid lg="6" md="6" sm="6" xs="6">
                <div className="team-player d-flex justify-content-center align-items-center">
                  {player}
                </div>
              </Col>
            );
          })}
        </Row>
        <div className="d-flex justify-content-center align-items-center">
          <Image
            style={{ height: "50%", maxHeight: "400px" }}
            fluid
            src={team.teamPhoto.url}
            alt={team.team}
          />
        </div>
      </div>
    </Col>
  );
};

export default EachTeam;
