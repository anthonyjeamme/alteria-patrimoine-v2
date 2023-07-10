import dynamic from "next/dynamic";
import { FC } from "react";

const ServerTextEdition = dynamic(() => import("./ServerField.edition"));

export interface TServerField {
  value: any;
  onChange?: (value: any) => void;
  edition: boolean;
}

export const ServerText: FC<TServerField> = ({ value, onChange, edition }) => {
  if (edition) return <ServerTextEdition value={value} onChange={onChange} />;

  return <div>{value}</div>;
};
