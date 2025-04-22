import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollToHash = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const scrollToSection = () => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);

        if (element) {
          const yOffset = -100; // Your offset here
          const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffset;

          window.scrollTo({ top: y, behavior: "smooth" });
        }
      };

      setTimeout(scrollToSection, 100); // wait for components to mount
    }
  }, [location]);
};
