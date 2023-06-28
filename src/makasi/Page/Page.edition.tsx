import { FC } from "react";
import { TPageData } from "./Page.types";
import SectionEdition from "../Section/Section.edition";

interface IPageProps {
  pageData: TPageData;
}

const PageEdition: FC<IPageProps> = ({ pageData }) => {
  return (
    <div>
      {pageData.sections.map((sectionData) => (
        <SectionEdition key={sectionData.id} sectionData={sectionData} />
      ))}
    </div>
  );
};

export default PageEdition;
