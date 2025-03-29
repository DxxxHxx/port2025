import { motion } from "framer-motion";

const variant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  whileInview: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2 },
  },
};
const Landing = () => {
  const handleNavigateContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="home" className="hero-container">
      <motion.div
        variants={variant}
        initial={"initial"}
        whileInView={"whileInview"}
        className="hero-content"
      >
        <div className="hero-text">
          <h1 className="">
            <span className="greeting">안녕하세요 : )</span>
            <span className="hero-name">신입 프론트엔드 개발자</span>
          </h1>
          <h2 className="title">이동훈 입니다.</h2>
          <p className="description ">
            I build exceptional digital experiences with clean, efficient code.
            Passionate about creating intuitive interfaces and robust backend
            solutions.
          </p>
          <div className="cta-buttons">
            <button className="primary-btn ">View My Work</button>
            <button onClick={handleNavigateContact} className="secondary-btn ">
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-image ">
          <div className="profile-image"></div>
        </div>
      </motion.div>
    </section>
  );
};
export default Landing;
