import ImproveList from "./ImproveList";
import { AnimatePresence } from "framer-motion";
import ImproveDetail from "../detail/ImproveDetail";
import { useState } from "react";

export default function ImproveListContainer() {
  const [showId, setshowId] = useState<number | null>(null);

  return (
    <>
      <ImproveList setshowId={(id: number) => setshowId(id)} />
      <AnimatePresence>
        {showId && (
          <ImproveDetail showId={showId} closeDetail={() => setshowId(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
