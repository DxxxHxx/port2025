import { ContactProps } from "../../types/interface";

export default function Contact({
  handleSubmit,
  content,
  email,
  name,
  title,
}: ContactProps) {
  return (
    <section
      id="contact"
      className=" py-16 px-4 md:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="contact__title text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Contact Me <em>test</em>
        </h2>
        <form onSubmit={handleSubmit} className="form">
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
              placeholder="홍길동"
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
              placeholder="your.email@example.com"
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
              name="content"
              value={content.value}
              style={{ resize: "none" }}
              onChange={content.handleChange}
              rows={10}
              placeholder="문의 내용을 작성해주세요..."
            />
          </div>
          <button type="submit">메시지 보내기</button>
        </form>

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
