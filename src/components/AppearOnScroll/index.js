import { useRef, useState, useEffect } from "react";
import "./AppearOnScroll.css"

export default function AppearOnScroll({ children, direction, baseClasses, id }) {

  const domRef = useRef();
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    const options = {
      rootMargin: "0px 0px -100px 0px"
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setVisible(true);
        observer.unobserve(domRef.current);
      }
    }, options);
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const getClassName = () => {
    return baseClasses + " animate__animated " + (isVisible ? `animate__fadeIn${direction} shown` : `hidden`)
  }

  return (
    <div ref={domRef} className={getClassName()} id={id}>
      {children}
    </div>
  );
}
