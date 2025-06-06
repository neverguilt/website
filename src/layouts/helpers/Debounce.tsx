// src/components/helpers/debounce.ts
export function debounce<T extends (...args: any[]) => any>(
    func: T,
    delay: number,
  ): {
    (...args: Parameters<T>): void;
    cancel: () => void;
  } {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
  
    const debounced = function (...args: Parameters<T>) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
  
      timeoutId = setTimeout(() => {
        func(...args);
        timeoutId = null;
      }, delay);
    };
  
    debounced.cancel = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
        timeoutId = null;
      }
    };
  
    return debounced;
  }