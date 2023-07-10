export type TStyle = {
  padding?: [number, number, number, number];
  margin?: [number, number, number, number];
  borderRadius?: [number, number, number, number];
  color?: string;
  backgroundColor?: string;
  gap?: [number, number];
  columns?: {
    desktop?: [number, string];
    tablet?: [number, string];
    mobile?: [number, string];
  };
  containerSize?: "small" | "medium" | "large";
  width?: number;
  height?: number;
  alignItems?: "flex-start" | "flex-end" | "center";
};
