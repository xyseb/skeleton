import { HTMLAttributes, ReactNode, createContext, useState, useEffect } from "react";

interface IPageStateContext {
  pageTestState: boolean;
  setPageTestState: (pageTestState: boolean) => void;
}

// create context
const PageStateContext = createContext<IPageStateContext>({
  pageTestState: false,
  setPageTestState: () => {},
});

interface PageStateContextProviderProps extends HTMLAttributes<Element> {
  children: ReactNode
  // add any custom props, but don't have to specify `children`
}

export const PageStateContextProvider: React.FC<PageStateContextProviderProps> = ({ children, ...props }) => {

  // the value that will be given to the context
  const [pageTestState, setPageTestState] = useState<boolean>(false);

  return (
    <PageStateContext.Provider value={{pageTestState, setPageTestState}}>
      {children}
    </PageStateContext.Provider>
  );
};

export default PageStateContext;
