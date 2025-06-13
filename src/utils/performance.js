// Performance monitoring utilities
export const measurePerformance = (name, fn) => {
    return (...args) => {
      const start = performance.now();
      const result = fn(...args);
      const end = performance.now();
      console.log(`${name} took ${end - start} milliseconds`);
      return result;
    };
  };
  
  // Web Vitals tracking (compatible with Vite)
  export const reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      // Dynamic import for web-vitals
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      }).catch(err => {
        console.log('Web Vitals not available:', err);
      });
    }
  };