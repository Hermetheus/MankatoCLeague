// useApi.js
import { useCallback, useEffect, useState } from "react";

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  const fetchApi = useCallback(() => {
    fetch(url) // 'https://jsonplaceholder.typicode.com/users'
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setLoading(false);
        setData(json);
      });
  }, [url]);

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return { loading, data };
};

export default useApi;
