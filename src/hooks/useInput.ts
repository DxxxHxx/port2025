import { ChangeEvent, useState } from "react";
import { FormInputTypes } from "../types/type";

const useInput = (initialValue?: string) => {
  const [value, setValue] = useState(initialValue || "");

  const handleChange = (e: ChangeEvent<FormInputTypes>) => {
    setValue(e.target.value);
  };

  const resetInput = () => setValue("");

  return { value, handleChange, resetInput };
};
export default useInput;
