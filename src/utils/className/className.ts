/*
 * WARNING ! You probably want to use `classNameModule`.
 *
 * Helps to write prettier code.
 *
 * <div className={`MyComponent${active?" active":""}`} />
 * become :
 * <div {...className("MyComponent", {active})} />
 */
export const className = (...list: TClassNameList) => ({
  className: transformList(list).join(" "),
});

/**
 * Helper for scss modules.
 *
 * - You can write simple class this way :
 * ```<div {...className("MyComponent")} />```
 *
 * - Boolean values ( _it will adds .active class if true_ ) :
 * ```<div {...className({ active: true })} />```
 *
 * - Variables ( _it will add .data-[type]-[value] class_ ) :
 * ```<div {...className({ size: "big" })} />```
 */
export const classNameModule =
  (styles: Record<string, string>) =>
  (...list: TClassNameList) => ({
    className: transformList(list)
      .map((item) => styles[item])
      .join(" "),
  });

const transformList = (list: TClassNameList): string[] => {
  const particules: string[] = [];

  for (const item of list) {
    if (typeof item === "string") particules.push(item);

    for (const [key, value] of Object.entries(item)) {
      if (typeof value === "string") {
        particules.push(`data-${key}-${value}`);
      } else if (value === true && !particules.includes(key))
        particules.push(key);
    }
  }

  return particules;
};

export type TClassNameList = TClassNameItem[];

type TClassNameItem = string | { [key: string]: boolean | string | number };

export const mergeClassNames = (
  a: string | { className: string } | undefined,
  b: string | { className: string } | undefined
) => {
  const classNameA =
    a === undefined ? "" : typeof a === "string" ? a : a.className;
  const classNameB =
    b === undefined ? "" : typeof b === "string" ? b : b.className;

  return {
    className: [classNameA, classNameB].filter((_) => !!_).join(" "),
  };
};
