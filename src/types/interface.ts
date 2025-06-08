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

export interface ProjectInfo {
  thumbnail: string;
  title: string;
  period: string;
  member: string;
  role: string;
  links: {
    serviceLink: string;
    githubLink: string;
  };
  desc: string;
  mainFeatures: {
    id: number;
    feat: string;
  }[];
  techReason: {
    id: number;
    tech: string;
    reason: string;
  }[];
  contribute: {
    id: number;
    title: string;
    desc: string;
    result: {
      number: string;
      text: string;
    };
  }[];
  reviews: {
    id: number;
    review: Reivew[];
  }[];
  references: References[];
}

interface References {
  id: number;
  title: string;
  link: string;
  desc: string;
}

interface Reivew {
  id: number;
  title: string;
  desc: string;
}
