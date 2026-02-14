import React, { useEffect, useState } from "react";
import { useRef } from "react";

const FadeInSection = ({ children, direction = "up" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
    );

    if (domRef.current) observer.observe(domRef.current);

    return () => observer.disconnect();
  }, []);

  const directionClasses = {
    up: isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
    right: isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10",
    left: isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10",
  };

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${directionClasses[direction]}`}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
