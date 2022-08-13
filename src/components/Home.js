import React, { useCallback, useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { hockeyStandings } from "../graphql/Queries";
import Loading from "./layout/Loading";
import Champion from "../images/champion.jpg";

const Home = ({ theme }) => {
  const [playOffData, setPlayoffData] = useState([]);
  const [champion, setChampion] = useState(undefined);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const { error, loading, data } = useQuery(hockeyStandings);

  useEffect(() => {
    if (loadingStatus === true && loading === false) {
      setPlayoffData(data);
      setLoadingStatus(false);
    }
  }, [data, loading, loadingStatus]);

  const getChampion = () => {
    let champion = "";
    playOffData.mankatoCLeague.hockeyStandings.Playoffs.map((game) => {
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
        <div className="d-flex">
          <div>
            <h1>
              Congratulations to the {getChampion()} on their 2021 - 2022
              Champions!
            </h1>
          </div>
          <div>
            <Image src={Champion} fluid width={"60%"} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
