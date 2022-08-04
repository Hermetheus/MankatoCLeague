import React from "react";
import useApi from "../../hooks/useApi";

const TeamList = () => {
  const { data, loading } = useApi(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      {!!loading ? (
        <span>Loading...</span>
      ) : (
        <>
          {data.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </>
      )}
    </div>
  );
};

export default TeamList;
