"use client";

import { FC, ReactNode, createContext, useContext } from "react";

import {
  TSectionData,
  TUseSectionParamsHook,
  TUseSectionParamsEditionHook as TUseSectionEditionHook,
} from "./Section.types";

import { FieldsContext } from "../fieldsContext/fieldsContext";
import { EditionContext } from "../contexts/EditionContext/EditionContext";

const sectionContext = createContext<{
  edition: boolean;
  params: any;
  updateParams: (data: any) => void;
}>({
  edition: false,
  params: null,
  updateParams: () => undefined,
});

/**
 *
 */
export function useSectionParams<
  TParams extends Record<string, unknown> = Record<string, unknown>
>(): TUseSectionParamsHook<TParams> {
  const { params } = useContext(sectionContext);

  return {
    params,
    getParam: (key) => params[key],
  };
}

/**
 *
 */
export function useSectionEdition<
  TParams extends Record<string, unknown> = Record<string, unknown>
>(): TUseSectionEditionHook<TParams> {
  const { params, updateParams } = useContext(sectionContext);

  return {
    setParam: (key, value) => {
      updateParams({
        ...params,
        [key]: value,
      });
    },
    updateParams: (params) => {
      updateParams(params);
    },
  };
}

/**
 *
 */
export const SectionContext: FC<{
  children: ReactNode;
  sectionData: TSectionData;
  edition?: boolean;
  handleUpdate?: (data: TSectionData) => void;
}> = ({ children, edition = false, sectionData, handleUpdate }) => (
  <EditionContext edition={edition}>
    <sectionContext.Provider
      value={{
        edition,
        params: sectionData.params,
        updateParams: (params) => {
          handleUpdate?.({
            ...sectionData,
            params,
          });
        },
      }}
    >
      <FieldsContext
        data={sectionData.fieldsData}
        update={(fieldsData) => {
          handleUpdate?.({
            ...sectionData,
            fieldsData,
          });
        }}
      >
        {children}
      </FieldsContext>
    </sectionContext.Provider>
  </EditionContext>
);
