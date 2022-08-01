import React, { useCallback } from "react";

const VisitorScore = (props) => {
  const { cell } = props;

  const findWinner = useCallback(() => {
    if (cell.row.original.homeScore > cell.row.original.visitorScore) {
      return <span className="text-danger">{cell.value}</span>;
    } else if (cell.row.original.visitorScore > cell.row.original.homeScore) {
      return <span className="text-success">{cell.value}</span>;
    } else {
      return <span className="text-info">{cell.value}</span>;
    }
  }, [cell.row.original.homeScore, cell.row.original.visitorScore, cell.value]);

  return <>{findWinner()}</>;
};

export default VisitorScore;
