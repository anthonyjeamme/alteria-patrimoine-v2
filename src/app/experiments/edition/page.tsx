"use client";

import { MySection } from "@/makasi/core/experiments/ServerSection";
import { useState } from "react";

const Page = () => {
  const [data, setData] = useState<Record<string, any>>({
    text: {
      value: "coucou",
    },
  });

  return (
    <div>
      <MySection
        field={(name) => {
          return {
            edition: true,
            value: data[name]?.value,
            onChange: (value) => {
              setData({ ...data, [name]: { ...data[name], value } });
            },
          };
        }}
      />
    </div>
  );
};

export default Page;
