import { useState, useEffect, useCallback, useRef } from "react";

function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  const fetchData = useCallback(
    async (abortSignal) => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal: abortSignal });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name === "AbortError") {
          console.log("Fetch aborted:", url);
        } else {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [url]
  );

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    fetchData(controller.signal);

    return () => {
      controller.abort();
    };
  }, [url, fetchData]);

  const refetch = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;
    fetchData(controller.signal);
  }, [fetchData]);

  return { data, loading, error, refetch };
}

export default useApi;
