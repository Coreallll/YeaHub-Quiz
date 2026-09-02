import { useUrlParams } from "./useUrlParams.ts";

export const useSpecFilter = () => {
  const { searchParams } = useUrlParams();
  const specFilter = searchParams.get("specializations") ?? "11";

  return { specFilter };
};
