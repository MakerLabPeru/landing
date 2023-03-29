import {createContext, useContext, useMemo, ReactNode} from 'react';

type NavContextType = {
  isMobile: boolean;
  isSection: boolean;
};

const NavContext = createContext<NavContextType>(null);

export const useNavContext = () => useContext(NavContext);

export const NavContextProvider = ({
  isMobile,
  isSection,
  children,
}: NavContextType & {children: ReactNode}) => {
  const parentContext = useNavContext();

  const newContext = {
    isMobile: isMobile ?? parentContext?.isMobile,
    isSection: isSection ?? parentContext?.isSection,
  };

  const value = useMemo(
    () => newContext,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newContext.isMobile, newContext.isSection],
  );

  return (
    <NavContext.Provider
      {...{value}}
    >
      {children}
    </NavContext.Provider>
  );
};
