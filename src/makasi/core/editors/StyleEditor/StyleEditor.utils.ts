import { CSSProperties } from "react";
import { TStyle } from "./StyleEditor.types";

export const styleToCSSProperties = (style: TStyle = {}): CSSProperties => {
  const cssProperties: any = {};

  if (style.padding) {
    cssProperties.padding = `${style.padding[0]}px ${style.padding[1]}px ${style.padding[2]}px ${style.padding[3]}px`;
  }
  if (style.margin) {
    cssProperties.margin = `${style.margin[0]}px ${style.margin[1]}px ${style.margin[2]}px ${style.margin[3]}px`;
  }
  if (style.borderRadius) {
    cssProperties.borderRadius = `${style.borderRadius[0]}px ${style.borderRadius[1]}px ${style.borderRadius[2]}px ${style.borderRadius[3]}px`;
  }
  if (style.color) {
    cssProperties.color = style.color;
  }
  if (style.backgroundColor) {
    cssProperties.backgroundColor = style.backgroundColor;
  }
  if (style.gap) {
    cssProperties.gap = `${style.gap[0]}px ${style.gap[1]}px`;
  }
  if (style.columns?.desktop) {
    cssProperties[
      "--desktop-columns"
    ] = `${style.columns.desktop[0]}, ${style.columns.desktop[1]}`;
  }
  if (style.columns?.tablet) {
    cssProperties[
      "--tablet-columns"
    ] = `${style.columns.tablet[0]}, ${style.columns.tablet[1]}`;
  }
  if (style.columns?.mobile) {
    cssProperties[
      "--mobile-columns"
    ] = `${style.columns.mobile[0]}, ${style.columns.mobile[1]}`;
  }
  if (style.containerSize) {
    cssProperties["width"] = `var(--${style.containerSize}-container-size)`;
  }
  if (style.height) {
    cssProperties.height = `${style.height}px`;
  }
  if (style.width) {
    cssProperties.width = `${style.width}px`;
  }
  if (style.alignItems) {
    cssProperties.display = "flex";
    cssProperties.alignItems = style.alignItems;
    cssProperties.flexDirection = "column";
  }

  return cssProperties as CSSProperties;
};
