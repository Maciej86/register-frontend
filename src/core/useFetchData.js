import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchData = (urlFetch, dependency = [], parameters = {}) => {
  const [fetchData, setFetchData] = useState([]);
  const [fetchDataLoading, setFetchDataLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const dataFetch = await axios.post(urlFetch, parameters);
        setFetchData(dataFetch.data);
        const timeFetch = setTimeout(() => {
          setFetchDataLoading(false);
        }, 700);

        return () => {
          clearTimeout(timeFetch);
        };
      } catch (error) {
        console.error(error);
      }
    })();
  }, dependency);

  return { fetchData, fetchDataLoading };
};
