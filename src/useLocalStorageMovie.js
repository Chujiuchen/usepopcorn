import { useState, useEffect } from "react";

export function useLocalStorageMovie(initialState, key) {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue === null) return [];
    return storedValue ? JSON.parse(storedValue) : initialState;
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
  return [value, setValue];
}
