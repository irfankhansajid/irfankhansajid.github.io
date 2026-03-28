import { useEffect, useRef } from "react";

function useReveal(threshold = 0.15) {
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;

    if (!element) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry], currentObserver) => {
        if (entry.isIntersecting) {
          element.classList.add("utility__revealed");
          currentObserver.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return sectionRef;
}

export default useReveal;
