import { CSSProperties } from "react";
import { Color } from "../color/color";

export const injectCSSVariables = (
  variables: Record<string, string | number>
) => {
  const styles: Record<string, any> = {};

  for (const [key, value] of Object.entries(variables)) {
    styles[`--${key}`] = value;
  }

  return styles as CSSProperties;
};

export const prepareColorVariablesForCSSInject = (
  colors: Record<string, string>
): Record<string, string> =>
  Object.entries(colors).reduce<Record<string, string>>(
    (acc, [name, value]) => {
      acc[`${name}`] = value;
      acc[`${name}-dec`] = Color.fromHex(value).toDecimals().join(", ");
      return acc;
    },
    {}
  );
