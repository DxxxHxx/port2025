import { useEffect } from "react";
import { motion } from "framer-motion";

export default function ProjectContributeDetaill({
  closeDetail,
}: {
  closeDetail: () => void;
}) {
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;

      closeDetail();
      console.log("close");
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [closeDetail]);
  return (
    <motion.div
      initial={{ backgroundColor: "rgba(0,0,0,0)" }}
      animate={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      exit={{ backgroundColor: "rgba(0,0,0,0)" }}
      transition={{ duration: 0.3 }}
      className="sidebar-overlay"
      onClick={closeDetail}
    >
      <motion.div
        initial={{ transform: "translateX(100%)" }}
        animate={{ transform: "translateX(0%)" }}
        exit={{ transform: "translateX(100%)" }}
        transition={{ duration: 0.3 }}
      >
        aaa
      </motion.div>
    </motion.div>
  );
}
