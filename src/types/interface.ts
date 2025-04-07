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

export interface SkillListState {
  id: number;
  title: string;
  descList: { id: number; desc: string }[];
}

export interface CardState {
  url: string;
  title: string;
  id: number;
  src: string;
}

export interface ChallengeCard {
  id: number;
  title: string;
  description: string;
  date: string;
  link: string;
}

export type ActiveTabType = "troubleshooting" | "improvement";
