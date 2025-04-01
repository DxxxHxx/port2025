import {
  motion,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { Dispatch, SetStateAction, useRef, useState } from "react";
import { improveList } from "../../constants/improveConstants";
import ImproveDetail from "../improve/detail/ImproveDetail";
import { CardState } from "../../types/interface";

const ImproveCarousel = () => {
  return (
    <div style={{ padding: "16px" }}>
      <h2 className="improve__title">
        Improve <em>개선</em>
      </h2>
      <HorizontalScrollCarousel />
    </div>
  );
};
export default ImproveCarousel;

export const HorizontalScrollCarousel = () => {
  const [showId, setShowId] = useState<number | null>(null);
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);

  return (
    <section ref={targetRef} className=" carousel">
      <div className=" carousel__item__wrapper">
        <motion.div style={{ x }} className="carousel__card__wrapper">
          {improveList.map((card) => {
            return <Card card={card} key={card.id} setShowId={setShowId} />;
          })}
        </motion.div>
      </div>
      <AnimatePresence>
        {showId && (
          <ImproveDetail closeDetail={() => setShowId(null)} showId={showId} />
        )}
      </AnimatePresence>
    </section>
  );
};

const Card = ({
  card,
  setShowId,
}: { card: CardState } & {
  setShowId: Dispatch<SetStateAction<number | null>>;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      key={card.id}
      className="group card"
      onClick={() => setShowId(card.id)}
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100%",
          zIndex: 0,
          position: "absolute",
        }}
      ></div>
      <div className="card__desc">
        <p>{card.title}</p>
      </div>
    </motion.div>
  );
};
