import dynamic from "next/dynamic";

import { TComponentDefinition } from "@/makasi/Component/Component.types";

const Component = dynamic(() => import("./TestComponent"));

export const TestComponentDefinition: TComponentDefinition<any> = {
  name: "test",
  Component,
};
