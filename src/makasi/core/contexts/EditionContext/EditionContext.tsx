import { FC, ReactNode, createContext, useContext } from "react";

const editionContext = createContext<{ edition: boolean }>({
  edition: false,
});

export const useEditionContext = () => useContext(editionContext);

export const EditionContext: FC<{ children: ReactNode; edition: boolean }> = ({
  children,
  edition,
}) => (
  <editionContext.Provider value={{ edition }}>
    {children}
  </editionContext.Provider>
);
