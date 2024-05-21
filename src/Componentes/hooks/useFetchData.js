import { useState, useEffect } from "react";
import { fetchData } from "../helpers/fetchData";
export const useFetchData = (endPoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getData = async () => {
    const { data, isLoading } = await fetchData(endPoint);
    setData(data);
    setIsLoading(isLoading);
  };
  useEffect(() => {
    getData();
  }, [endPoint]);

  return {
    data,
    isLoading,
  };
};
