import { useState } from "react";
import { siteText } from "../constants/siteConstant";
import { AnimatePresence, motion } from "framer-motion";

const SiteContainer = () => {
  const [showId, setshowId] = useState<number | null>(null);

  return (
    <>
      <Site setshowId={(id: number) => setshowId(id)} />
      <AnimatePresence>
        {showId && (
          <SiteDetail showId={showId} closeDetail={() => setshowId(null)} />
        )}
      </AnimatePresence>
    </>
  );
};
export default SiteContainer;
const SiteDetail = ({
  showId,
  closeDetail,
}: {
  showId: number;
  closeDetail: () => void;
}) => {
  const data = siteText.find((item) => item.id === showId);
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
        {JSON.stringify(data)}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.Lorem
        ipsum dolor sit amet, consectetur adipisicing elit. Vitae, quam
        provident dolores hic, illo esse fugit natus odit eius, fuga cum!
        Blanditiis ut aliquid harum porro architecto quas explicabo facere.
      </motion.div>
    </motion.div>
  );
};
function Site({ setshowId }: { setshowId: (id: number) => void }) {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((item) => (
            <article
              onClick={() => setshowId(item.id)}
              key={item.id}
              className={`site__item s${item.id}`}
            >
              <span className="num">{item.id}.</span>
              <div className="text">
                {item.text.map((i) => (
                  <div key={i}>{i}</div>
                ))}
              </div>
              <h3 className="title">{item.title}</h3>

              <div className="btn">
                <a target="_blank" rel="noopener noreferrer" href={item.code}>
                  code
                </a>
                <a target="_blank" rel="noopener noreferrer" href={item.view}>
                  view
                </a>
              </div>

              <div className="info">
                {item.info.map((i) => (
                  <span key={i}>{i}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
