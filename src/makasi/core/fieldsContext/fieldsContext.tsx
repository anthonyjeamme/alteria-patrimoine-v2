import { FC, createContext, useContext } from "react";
import {
  TFieldsContext,
  IFieldsContextProps,
  TUseFieldContextHook,
  TUseFieldEditionHook,
} from "./fieldsContext.types";

const fieldsContext = createContext<TFieldsContext>({
  data: {},
  update: () => undefined,
});

/**
 *
 */
export function useFieldContext<
  TValue = unknown,
  TParams extends Record<string, unknown> = Record<string, unknown>
>(name: string): TUseFieldContextHook<TValue, TParams> {
  const context = useContext(fieldsContext);
  const fieldData = context.data?.[name];

  return {
    value: fieldData?.value,
    params: fieldData?.params,
    getParam: (key) => fieldData?.params?.[key],
  };
}

/**
 *
 */
export function useFieldEdition<
  TValue = unknown,
  TParams extends Record<string, unknown> = Record<string, unknown>
>(name: string): TUseFieldEditionHook<TValue, TParams> {
  const context = useContext(fieldsContext);

  return {
    setValue: (value) => {
      context.update?.({
        ...context.data,
        [name]: {
          ...context.data?.[name],
          value,
        },
      });
    },
    setParam: (key, value) => {
      context.update?.({
        ...context.data,
        [name]: {
          ...context.data?.[name],
          params: {
            ...context.data?.[name]?.params,
            [key]: value,
          },
        },
      });
    },
    updateParams: (params) => {
      context.update?.({
        ...context.data,
        [name]: {
          ...context.data?.[name],
          params: {
            ...context.data?.[name]?.params,
            ...params,
          },
        },
      });
    },
  };
}

/**
 *
 */
export const FieldsContext: FC<IFieldsContextProps> = ({
  children,
  data,
  update,
}) => (
  <fieldsContext.Provider
    value={{
      data,
      update,
    }}
  >
    {children}
  </fieldsContext.Provider>
);
