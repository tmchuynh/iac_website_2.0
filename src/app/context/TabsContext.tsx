import React, { createContext, JSX, useContext, useState } from "react";

interface TabsContextType {
  defaultTab: string;
  setDefaultTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

/**
 * Provider component for managing tab state across the application.
 *
 * @component
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child components that will have access to the tabs context
 * @returns {JSX.Element} A context provider wrapper component
 *
 * @example
 * ```tsx
 * <TabsProvider>
 *   <App />
 * </TabsProvider>
 * ```
 */
export const TabsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [defaultTab, setDefaultTab] = useState("Chess");

  return (
    <TabsContext.Provider value={{ defaultTab, setDefaultTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = (): TabsContextType => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }
  return context;
};
