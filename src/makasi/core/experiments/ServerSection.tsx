import { FC } from "react";
import { ServerText, TServerField } from "./ServerField";

export type TServerSection = {
  field: (name: string) => TServerField;
};

export const MySection: FC<TServerSection> = ({ field }) => {
  return (
    <div
      style={{
        padding: 100,
        backgroundColor: "var(--light)",
      }}
    >
      <ServerText {...field("text")} />
    </div>
  );
};
