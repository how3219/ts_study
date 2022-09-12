import { useRef } from 'react';

export function debounce<T extends any[]>(callback: (...params: T) => any, time: number) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  return (...params: T) => {
    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      callback(...params);
      timer.current = null;
    }, time);
  };
}

// export function Debounce<T extends any[]>(func: (...args: T) => any, delay: number): (...args: T) => void {
//   let inDebounce: any;
//   return function (...args: T) {
//     if (inDebounce) {
//       clearTimeout(inDebounce);
//     }
//     inDebounce = setTimeout(() => func(...args), delay);
//   };
// }
