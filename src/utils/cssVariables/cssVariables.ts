import { CSSProperties } from "react";
import { Color } from "../color/color";

export const injectCSSVariable = (
  variables: Record<string, string | number>
) => {
  const styles: Record<string, any> = {};

  for (const [key, value] of Object.entries(variables)) {
    styles[`--${key}`] = value;
  }

  return styles as CSSProperties;
};

export const getCSSVariablesObject = (
  colors: Record<string, string>
): React.CSSProperties =>
  Object.entries(colors).reduce<Record<string, string>>(
    (acc, [name, value]) => {
      acc[`--${name}`] = value;
      acc[`--${name}-dec`] = Color.fromHex(value).toDecimals().join(", ");
      return acc;
    },
    {}
  );
