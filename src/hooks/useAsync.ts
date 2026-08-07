import {useEffect, useState} from "react";
import axios from "axios";

export function useAsync<T>(
  fetcher: (signal: AbortSignal) => Promise<T>,
  deps: unknown[],
) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function run() {
      try {
        setIsLoading(true);
        setError("");
        const result = await fetcher(controller.signal);
        setData(result);
      } catch (error) {
        if(axios.isCancel(error)) return;
        setError(String(error));
      } finally {
        setIsLoading(false);
      }
    }
    run();
    return () => controller.abort();
  }, deps)

  return { data, isLoading, error };
}