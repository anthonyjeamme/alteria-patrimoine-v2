"use client";

import { classNameModule } from "@/utils/className/className";
import styles from "./page.module.scss";
import { useState } from "react";
import Content from "@/makasi/core/Content/Content";
import { TContentNode } from "@/makasi/core/Content/Content.types";
import { components } from "@/project/components/components";
import { EditionContext } from "@/makasi/core/contexts/EditionContext/EditionContext";
const className = classNameModule(styles);

const Page = () => {
  const [data, setData] = useState<{ nodes: TContentNode[] }>({
    nodes: [],
  });

  return (
    <EditionContext edition>
      <div {...className("Page")}>
        <div>
          <Content
            nodes={data.nodes}
            components={components}
            onChange={(nodes) => {
              setData({ nodes });
            }}
          />
        </div>
        {/* <div>
          <button
            onClick={() => {
              console.log(data.nodes[0]);
            }}
          >
            Exporter
          </button>

          <hr />
          <ContentEditor
            nodes={data.nodes}
            onChange={(nodes) => {
              setData({ nodes });
            }}
            components={components}
          />
        </div> */}
      </div>
    </EditionContext>
  );
};

export default Page;
