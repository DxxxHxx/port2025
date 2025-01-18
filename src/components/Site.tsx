import { siteText } from "../constants";

export default function Site() {
  return (
    <section id="site">
      <div className="site__inner">
        <h2 className="site__title">
          Site coding <em>나의 작업물</em>
        </h2>
        <div className="site__wrap">
          {siteText.map((item, index) => (
            <article key={index} className="site__item s1">
              <span className="num">{index + 1}.</span>
              <div className="text">
                {item.text.map((i) => (
                  <div key={i}>{i}</div>
                ))}
              </div>
              <h3 className="title">{item.title}</h3>
              <div className="btn">
                <a href="https://github.com/webstoryboy/port2023-vite">
                  {item.code}
                </a>
                <a href="https://port2023-vite.netlify.app/">{item.view}</a>
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
