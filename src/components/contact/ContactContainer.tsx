import { FormEvent } from "react";
import Contact from "./Contact";
import useInput from "../../hooks/useInput";

export default function ContactContainer() {
  const name = useInput();
  const email = useInput();
  const title = useInput();
  const content = useInput();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name.value);
    console.log(email.value);
    console.log(title.value);
    console.log(content.value);
  };
  return (
    <Contact
      handleSubmit={handleSubmit}
      content={content}
      email={email}
      name={name}
      title={title}
    />
  );
}
