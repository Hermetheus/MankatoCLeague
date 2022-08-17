import React, { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { hockeyStandings } from "../graphql/Queries";
import Loading from "./layout/Loading";
import Champion from "../images/champion.jpg";
import Contact from "./Contact";
import { lightTheme } from "../util/theme";

const Home = ({ theme }) => {
  const [playOffData, setPlayoffData] = useState([]);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const { loading, data } = useQuery(hockeyStandings);

  useEffect(() => {
    if (loadingStatus === true && loading === false) {
      setPlayoffData(data);
      setLoadingStatus(false);
    }
  }, [data, loading, loadingStatus]);

  const getChampion = () => {
    let champion = "";
    playOffData.mankatoCLeague.hockeyStandings.playoffs.map((game) => {
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
      {loadingStatus === true && <Loading />}
      {loadingStatus === false && !!playOffData && (
        <>
          <div className=" d-flex flex-column justify-content-center align-items-center align-content-center text-center">
            <h1>
              Congratulations to the {getChampion()} on their 2021 - 2022
              Champions!
            </h1>
            <Image src={Champion} fluid width={"60%"} />
          </div>
          <Row className="p-5" id="contact-form">
            <Col lg="6" sm="12">
              <h2 className="text-center">Interested in Joining?</h2>
              <hr
                style={{
                  color: lightTheme.accent,
                }}
              />
              <div>Are you interested in playing C League hockey?</div>
              <div>Have something you want to discuss with the board?</div>
              <div>Please fill out the form.</div>
            </Col>
            <Col lg="6" sm="12">
              <div>
                <Contact />
              </div>
            </Col>
          </Row>
        </>
      )}
    </>
  );
};

export default Home;
