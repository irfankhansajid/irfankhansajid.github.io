import { useEffect, useRef } from "react";

function useReveal(threshold = 0.1) {
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
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold]);

  return sectionRef;
}

export default useReveal;
