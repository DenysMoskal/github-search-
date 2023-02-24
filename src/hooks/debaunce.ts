import { useState, useEffect } from "react";

export const useDebaunce = (value: string, delay: number = 500) => {
  const [debaunced, setDebaunced] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebaunced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debaunced;
};
