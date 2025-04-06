import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { improveList } from "../../constants/improveConstants";
import { CardState } from "../../types/interface";

const ImproveCarousel = () => {
  return (
    <div style={{ padding: "16px" }} id="improve">
      <h2 className="improve__title">
        Improve <em>개선</em>
      </h2>
      <HorizontalScrollCarousel />
    </div>
  );
};
export default ImproveCarousel;

export const HorizontalScrollCarousel = () => {
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
            return (
              <a href={card.url} target="_blank">
                <Card {...card} key={card.id} />
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = (card: CardState) => {
  return (
    <motion.div
      whileHover={{ scale: 0.9 }}
      key={card.id}
      className="group card"
    >
      <div
        style={{
          backgroundImage: `url(${card.src})`,
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
