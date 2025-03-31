import { FormEvent, RefObject } from "react";
import { FormInputTypes } from "./type";

export interface UseInputState {
  value: string;
  handleChange: (e: React.ChangeEvent<FormInputTypes>) => void;
  resetInput: () => void;
}

export interface ContactProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  name: UseInputState;
  email: UseInputState;
  title: UseInputState;
  content: UseInputState;
  formRef: RefObject<HTMLFormElement>;
  loading: boolean;
}
