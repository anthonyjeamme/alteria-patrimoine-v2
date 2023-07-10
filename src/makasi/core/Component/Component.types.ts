import { ComponentType, ReactNode } from "react";

export type TComponent<TComponentData = unknown, TComponentParams = unknown> = {
  componentId: string;
  componentData: TComponentData;
  componentParams: TComponentParams;
};

export type TComponentProps<TData = unknown, TParams = unknown> = {
  data: TData;
  params: TParams;
  children?: ReactNode;
};

export type TComponentDefinition<TData = unknown, TParams = unknown> = {
  name: string;
  label: string;
  hasChildren: boolean;
  Component: ComponentType<TComponentProps<TData, TParams>>;
};
