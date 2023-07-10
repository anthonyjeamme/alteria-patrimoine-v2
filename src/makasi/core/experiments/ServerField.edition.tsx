"use client";

import { FC } from "react";

interface TServerEditionField {
  value: any;
  onChange?: (value: any) => void;
}

const ServerTextEdition: FC<TServerEditionField> = ({ value, onChange }) => {
  //

  return (
    <div
      dangerouslySetInnerHTML={{ __html: `${value}` }}
      contentEditable
      onBlur={(e) => {
        onChange?.(e.target.textContent);
      }}
    />
  );
};

export default ServerTextEdition;
