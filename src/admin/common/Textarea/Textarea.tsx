import { FC, useEffect, useRef } from "react";

import { classNameModule } from "@/utils/className/className";

import styles from "./Textarea.module.scss";
const className = classNameModule(styles);

interface ITextareaProps {
  value: string;
  onChange: (value: string) => void;
}

const Textarea: FC<ITextareaProps> = ({ value, onChange }) => {
  const rootRef = useRef<HTMLTextAreaElement>(null);

  useEffect(resizeTextarea, []);

  return (
    <textarea
      ref={rootRef}
      rows={1}
      {...className("Textarea")}
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
      onInput={() => {
        resizeTextarea();
      }}
    />
  );

  function resizeTextarea() {
    const rootElement = rootRef.current;
    if (!rootElement) return;
    rootElement.style.height = "0";
    rootElement.style.height = `${rootElement.scrollHeight + 2}px`;
  }
};

export default Textarea;
