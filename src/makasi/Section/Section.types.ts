import { ComponentType } from "react";

export type TSectionData = {
  id: string;
  type: string;
  // TODo
};

export type TSectionDefinition = {
  name: string;
  Component: ComponentType<{}>;
};
