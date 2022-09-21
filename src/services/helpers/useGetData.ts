import { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

export const useFetch = <T>(url: string | undefined) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      if (url) {
        const { data } = await axios.get<T>(url);
        setData(data);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.response?.data.message);
      }
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, error, loading };
};
