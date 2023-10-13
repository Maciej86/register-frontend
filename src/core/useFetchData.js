import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (urlFetch, dependency) => {
  const [fetchData, setFetchData] = useState([]);
  const [fetchDataLoading, setFetchDataLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const dataFetch = await axios.post(urlFetch);
        setFetchData(dataFetch.data);
        setTimeout(() => {
          setFetchDataLoading(false);
        }, 700);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [dependency]);

  return { fetchData, fetchDataLoading };
};
