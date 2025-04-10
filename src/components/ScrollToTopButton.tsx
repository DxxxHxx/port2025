import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const $project = document.querySelector("#project");
    if (!$project) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    observer.observe($project!);

    return () => observer.unobserve($project!);
  }, []);
  return (
    <>
      {visible && (
        <motion.button
          id="scroll-top-btn"
          whileHover={{
            backgroundColor: "oklch(0.424 0.199 265.638)",
          }}
          onClick={() =>
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
          }
        >
          <ChevronUp id="arrow" />
        </motion.button>
      )}
    </>
  );
}
