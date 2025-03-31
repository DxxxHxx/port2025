import { ContactProps } from "../../types/interface";
import { motion } from "framer-motion";

const variants = {
  init: {
    opacity: 0,
    y: 50,
  },
  inView: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};
export default function Contact({
  handleSubmit,
  content,
  email,
  name,
  title,
  formRef,
  loading,
}: ContactProps) {
  return (
    <section
      id="contact"
      className=" py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="contact__title text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact <em>읽어주셔서 감사합니다 !</em>
        </h2>
        <motion.form
          variants={variants}
          initial="init"
          whileInView="inView"
          viewport={{ margin: "100px" }}
          ref={formRef}
          onSubmit={handleSubmit}
          className="form"
        >
          <div className="mb-6 form__label_input">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              이름
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name.value}
              onChange={name.handleChange}
              placeholder="이름"
              required
            />
          </div>
          <div className="mb-6 form__label_input">
            <label
              htmlFor="title"
              className="block text-gray-700 font-medium mb-2"
            >
              제목
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={title.value}
              onChange={title.handleChange}
              placeholder="제목"
              required
            />
          </div>
          <div className="mb-6 form__label_input">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              이메일
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email.value}
              onChange={email.handleChange}
              placeholder="이메일"
              required
            />
          </div>
          <div className="mb-6 form__label_input">
            <label
              htmlFor="content"
              className="block text-gray-700 font-medium mb-2"
            >
              메시지
            </label>
            <textarea
              id="content"
              name="message"
              value={content.value}
              style={{ resize: "none" }}
              onChange={content.handleChange}
              rows={10}
              placeholder="내용을 작성해주세요."
              required
            />
          </div>
          <button
            style={{ backgroundColor: loading ? "gray" : "" }}
            type="submit"
          >
            {loading ? "전송 중 . . ." : "메시지 보내기"}
          </button>
        </motion.form>

        <hr className="divide"></hr>
        <div className="contact__info mt-10 text-center">
          <p className="text-gray-600">또는</p>
          <a
            href="mailto:your.email@example.com"
            className="text-blue-600 font-medium hover:underline"
          >
            donghun1163@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
