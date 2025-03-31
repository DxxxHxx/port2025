import { FormEvent, useRef, useState } from "react";
import Contact from "./Contact";
import useInput from "../../hooks/useInput";
import emailjs from "@emailjs/browser";

export default function ContactContainer() {
  const name = useInput();
  const email = useInput();
  const title = useInput();
  const content = useInput();
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      );
      alert("전송 완료되었습니다. 감사합니다 !");
      setLoading(false);
      [name, email, title, content].forEach((item) => item.resetInput());
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Contact
      handleSubmit={handleSubmit}
      content={content}
      email={email}
      name={name}
      title={title}
      formRef={formRef}
      loading={loading}
    />
  );
}
