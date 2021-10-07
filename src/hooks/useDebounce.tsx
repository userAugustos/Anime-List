import { useRef } from "react";

export default function useDebounce(fn: any, delay: number) {
  const timeoutRef = useRef(0);

  function deboucendFn(...params: any) {
    window.clearTimeout(timeoutRef.current);

    timeoutRef.current = window.setTimeout(() => {
      fn(...params);
    }, delay);
  }

  return deboucendFn;
}
