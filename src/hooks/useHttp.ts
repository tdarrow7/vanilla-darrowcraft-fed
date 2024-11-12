import { useCallback, useEffect, useState } from "react";

const sendHttpRequest = async <T>(
  url: string,
  config: RequestInit
): Promise<T> => {
  const response = await fetch(url, config);
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }
  return resData;
};

export const defaultGETconfig = {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};

export const useHttp = <T>(
  url: string,
  config: RequestInit,
  initialData?: T
) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<T | undefined>(initialData);

  const sendRequest = useCallback(async () => {
    setIsFetching(true);
    try {
      const resData = await sendHttpRequest<T>(url, config);
      setData(resData);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setIsFetching(false);
    }
  }, [url, config]);

  useEffect(() => {
    if (config && config.method === "GET") sendRequest();
  }, [url, config, sendRequest]);

  return { isFetching, error, data, sendRequest };
};
