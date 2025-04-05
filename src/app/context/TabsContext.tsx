import React, { createContext, useContext, useState } from "react";

interface TabsContextType {
  defaultTab: string;
  setDefaultTab: (value: string) => void;
}

const TabsContext = createContext<TabsContextType | undefined>(undefined);

export const TabsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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
