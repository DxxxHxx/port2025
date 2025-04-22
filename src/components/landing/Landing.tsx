import { motion } from "framer-motion";

const variant = {
  initial: {
    y: 50,
    opacity: 0,
  },
  whileInview: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};
const Landing = () => {
  const handleNavigate = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  return (
    <section id="home" className="hero-container">
      <motion.div
        variants={variant}
        initial={"initial"}
        whileInView={"whileInview"}
        className="hero-content"
      >
        <div className="hero-text">
          <motion.h1 variants={variant} className="">
            <span className="greeting">안녕하세요 : )</span>
            <span className="hero-name">신입 프론트엔드 개발자</span>
          </motion.h1>
          <motion.h2 variants={variant} className="title">
            이동훈 입니다.
          </motion.h2>
          <motion.p variants={variant} className="description ">
            {/* 저는 사람들의 반응을 보는 것을 좋아합니다.
            <br />
            피드백을 받는 것에 열려있고 이를 통해 확실히 성장한다고
            믿고있습니다.
            <br /> */}
            서비스의 첫 인상을 담당하는 만큼,
            <br />
            더 좋은 경험을 제공하기 위해 사소한 디테일도 신경쓰며,
            <br />
            작은 변화도 사용자에게 큰 영향을 줄 수 있다고 믿습니다.
          </motion.p>
          <motion.div variants={variant} className="cta-buttons">
            <button
              className="primary-btn"
              onClick={() => handleNavigate("project")}
            >
              Project
            </button>
            <button
              onClick={() => handleNavigate("contact")}
              className="secondary-btn "
            >
              Contact
            </button>
          </motion.div>
        </div>
        <motion.div transition={{ delay: 0.2 }} className="hero-image ">
          <img
            src="https://mblogthumb-phinf.pstatic.net/MjAyMDAyMTBfODAg/MDAxNTgxMzA0MTE3ODMy.ACRLtB9v5NH-I2qjWrwiXLb7TeUiG442cJmcdzVum7cg.eTLpNg_n0rAS5sWOsofRrvBy0qZk_QcWSfUiIagTfd8g.JPEG.lattepain/1581304118739.jpg?type=w800"
            className="profile-image"
          ></img>
        </motion.div>
      </motion.div>
    </section>
  );
};
export default Landing;
