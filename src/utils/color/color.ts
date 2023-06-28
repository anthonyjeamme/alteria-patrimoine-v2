import uniqid from "uniqid";

export type TColorRaw = {
  r: number;
  g: number;
  b: number;
  a: number;
};

export class Color {
  r: number;
  g: number;
  b: number;
  a: number;
  id: string;

  constructor(r: number, g: number, b: number, a: number = 255) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.id = uniqid();
  }

  clone(): Color {
    return new Color(this.r, this.g, this.b, this.a);
  }

  toJSON(): TColorRaw {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a,
    };
  }

  setAlpha(a: number) {
    this.a = Math.max(0, Math.min(255, Math.round(a)));
    return this;
  }

  isEqual(color: Color): boolean {
    return (
      this.r === color.r &&
      this.g === color.g &&
      this.b === color.b &&
      this.a === color.a
    );
  }

  variant(dh: number, ds: number, dl: number): Color {
    const [h, s, l] = rgbToHsl(this.r, this.g, this.b);

    const [r, g, b] = hslToRgb(
      (h - dh / 100 + 1) % 1,
      minMax(s - ds / 100, 0, 1),
      minMax(l - dl / 100, 0, 1)
    );

    return new Color(r, g, b, this.a);
  }

  darken(amount: number): Color {
    const [h, s, l] = rgbToHsl(this.r, this.g, this.b);

    const [r, g, b] = hslToRgb(h, s, minMax(l - amount / 100, 0, 1));

    return new Color(r, g, b, this.a);
  }

  generateVariants(n: number, dh: number, ds: number, dl: number): Color[] {
    const colors: Color[] = [];

    for (let i = -n; i <= n; i++) {
      colors.push(this.variant(i * dh, i * ds, i * dl));
    }

    return colors.reverse();
  }

  static fromJSON(color: TColorRaw) {
    return new Color(color.r, color.g, color.b, color.a);
  }

  static fromHex(hex: string): Color {
    const hexRegex = /^#?([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;
    if (!hexRegex.test(hex)) {
      throw new Error("Invalid hexadecimal color string");
    }
    const rawHex = hex.replace(/^#/, "");
    const r = parseInt(rawHex.substring(0, 2), 16);
    const g = parseInt(rawHex.substring(2, 4), 16);
    const b = parseInt(rawHex.substring(4, 6), 16);
    const a = rawHex.length === 8 ? parseInt(rawHex.substring(6, 8), 16) : 255;

    return new Color(r, g, b, a);
  }

  static fromHSLA(h: number, s: number, l: number, a: number) {
    const [r, g, b] = hslToRgb(h, s, l);

    return new Color(r, g, b, a);
  }

  toHSLA(): { h: number; s: number; l: number; a: number } {
    const [h, s, l] = rgbToHsl(this.r, this.g, this.b);

    return { h, s, l, a: this.a };
  }

  toHex(): string {
    const rHex = this.r.toString(16).padStart(2, "0");
    const gHex = this.g.toString(16).padStart(2, "0");
    const bHex = this.b.toString(16).padStart(2, "0");
    const aHex = this.a.toString(16).padStart(2, "0");
    return `#${rHex}${gHex}${bHex}${this.a !== 255 ? aHex : ""}`;
  }

  toHexAA(): string {
    const rHex = this.r.toString(16).padStart(2, "0");
    const gHex = this.g.toString(16).padStart(2, "0");
    const bHex = this.b.toString(16).padStart(2, "0");
    const aHex = this.a.toString(16).padStart(2, "0");
    return `#${rHex}${gHex}${bHex}${aHex}`;
  }

  export() {
    return this.toHex().replace("#", "");
  }

  static import(data: any) {
    return Color.fromHex(data);
  }

  toDecimals(): number[] {
    return [this.r, this.g, this.b];
  }

  static Red() {
    return new Color(255, 0, 0, 255);
  }

  static Green() {
    return new Color(0, 255, 0, 255);
  }

  static Blue() {
    return new Color(0, 0, 255, 255);
  }

  static White() {
    return new Color(255, 255, 255, 255);
  }

  static Black() {
    return new Color(0, 0, 0, 255);
  }

  static Yellow() {
    return new Color(255, 255, 0, 255);
  }

  static Magenta() {
    return new Color(255, 0, 255, 255);
  }
}
function hslToRgb(h: number, s: number, l: number) {
  var r, g, b;

  if (s == 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p: number, q: number, t: number) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

function rgbToHsl(r: number, g: number, b: number): [number, number, number] {
  (r /= 255), (g /= 255), (b /= 255);
  var max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  var h: number = 0,
    s: number,
    l: number = (max + min) / 2;

  if (max == min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h, s, l];
}

const minMax = (value: number, min: number, max: number) =>
  Math.max(min, Math.min(value, max));

function rgbToAscii(rgb: { r: number; g: number; b: number }): string {
  let asciiColor =
    String.fromCharCode(rgb.r) +
    String.fromCharCode(rgb.g) +
    String.fromCharCode(rgb.b);
  return asciiColor;
}

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function easeOutIn(t: number) {
  if (t < 0.5) return 0.5 * (1 - Math.pow(1 - 2 * t, 2));
  return 0.5 * (Math.pow(2 * t - 1, 2) + 1);
}

export const getSmoothGradient = (precision = 10) => {
  const colors = [];

  for (let i = 0; i <= 1; i += 1 / precision) {
    colors.push(easeInOut(1 - i));
  }

  return colors.map((i) => `rgba(255, 255, 255, ${i * 0.075})`);
};

export const getEasingPositions = (precision: number) => {
  const positions: number[] = [];

  for (let i = 0; i <= 1; i += 1 / precision) {
    positions.push(easeInOut(i));
  }

  return positions;
};

export const getLinearPositions = (precision: number) => {
  const positions: number[] = [];

  for (let i = 0; i <= 1; i += 1 / precision) {
    positions.push(i);
  }

  return positions;
};

export const getRadialGradient = (from: string, to: string, precision = 10) => {
  const positions = getLinearPositions(precision);

  const fromColor = Color.fromHex(from);
  const toColor = Color.fromHex(to);

  const gradientPoints: { color: string; position: number }[] = [];

  for (const position of positions) {
    gradientPoints.push({
      color: getGradientIntermediatePoint(
        fromColor,
        toColor,
        easeInOut(position)
      ).toHex(),
      position: Math.round(position * 100) / 100,
    });
  }

  return `radial-gradient(closest-side at 50% 50%, ${gradientPoints
    .map(({ color, position }) => `${color} ${Math.round(position * 100)}%`)
    .join(",")})`;
};

const getGradientIntermediatePoint = (
  from: Color,
  to: Color,
  position: number
) => {
  if (position <= 0) return from;
  if (position >= 1) return to;

  return new Color(
    getHexIntermediatePoint(from.r, to.r, position),
    getHexIntermediatePoint(from.g, to.g, position),
    getHexIntermediatePoint(from.b, to.b, position),
    getHexIntermediatePoint(from.a, to.a, position)
  );
};

const getHexIntermediatePoint = (
  from: number,
  to: number,
  position: number
) => {
  if (position <= 0) return from;
  if (position >= 1) return to;

  return Math.round(from + (to - from) * position);
};
