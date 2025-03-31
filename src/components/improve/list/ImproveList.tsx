import { siteText } from "../../../constants/siteConstant";

export default function ImproveList({
  setshowId,
}: {
  setshowId: (id: number) => void;
}) {
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
