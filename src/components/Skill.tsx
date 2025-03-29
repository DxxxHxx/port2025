import { skillText } from "../constants/skillConstant";

export default function Skill() {
  return (
    <section id="skill">
      <div className="skill__inner">
        <h2 className="skill__title">
          My Skill <em>기술 스택</em>
        </h2>
        <div className="skill__desc">
          {skillText.map((item, index) => (
            <div key={index}>
              <span>{index + 1}.</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
