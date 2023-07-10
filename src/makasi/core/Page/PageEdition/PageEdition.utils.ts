import uniqid from "uniqid";

import { TSectionData, TSectionDefinition } from "../../Section/Section.types";

export function moveElement<ElementType = unknown>(
  list: ElementType[],
  fromIndex: number,
  toIndex: number
): ElementType[] {
  const newList = [...list];
  const element = newList.splice(fromIndex, 1)[0];
  newList.splice(toIndex, 0, element);
  return newList;
}

export function insertElement<ElementType = unknown>(
  list: ElementType[],
  element: ElementType,
  index: number
): ElementType[] {
  const newList = [...list];
  newList.splice(index, 0, element);
  return newList;
}

export function updateElement<ElementType = unknown>(
  list: ElementType[],
  element: ElementType,
  index: number
): ElementType[] {
  return list.map((item, i) =>
    i === index
      ? {
          ...item,
          ...element,
        }
      : item
  );
}

export function removeElement<ElementType = unknown>(
  list: ElementType[],
  index: number
): ElementType[] {
  return list.filter((_, i) => i !== index);
}

export function generateDefaultSectionData(
  sectionDefinition: TSectionDefinition
): TSectionData {
  return {
    id: uniqid(),
    fieldsData: sectionDefinition.defaultData?.fieldsData || {},
    params: sectionDefinition.defaultData?.params || {},
    type: sectionDefinition.name,
  };
}
