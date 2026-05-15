import { useEffect, useState, type RefObject } from "react";

export function useInView(ref: RefObject<HTMLElement | null>, options?: { threshold?: number; once?: boolean }) {
  const [isInView, setIsInView] = useState(false);
  const { threshold = 0.15, once = true } = options || {};

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref, threshold, once]);

  return isInView;
}
