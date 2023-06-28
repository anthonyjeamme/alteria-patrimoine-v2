import { Page } from "@/makasi";
import { sections } from "@/sections/sections";

export default async function Home() {
  // TODO fetch data !

  return (
    <Page
      sectionDefinitions={sections}
      pageData={{
        sections: [
          {
            id: "A",
            type: "header",
          },
          {
            id: "B",
            type: "header",
          },
          {
            id: "C",
            type: "header",
          },
          {
            id: "D",
            type: "header",
          },
        ],
      }}
    />
  );
}
