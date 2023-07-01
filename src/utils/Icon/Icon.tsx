// @ts-nocheck
"use client";

import { IconProps } from "@phosphor-icons/react";
import dynamic from "next/dynamic";
import { FC, Suspense } from "react";

export const Icon: FC<
  IconProps & {
    name: string;
  }
> = ({ name, ...props }) => {
  const IconContent = dynamic(() =>
    import("@phosphor-icons/react").then((mod) => mod[name])
  );

  return (
    <Suspense>
      <IconContent {...props} />
    </Suspense>
  );
};
