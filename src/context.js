import { createContext } from "react";
import { useState } from "react";

export const SelectedRowContext = createContext(null);

export const SelectedRowProvider = ({ children }) => {
  const [selectedRowId, setSelectedRowId] = useState();

  return (
    <SelectedRowContext.Provider value={{ selectedRowId, setSelectedRowId }}>
      {children}
    </SelectedRowContext.Provider>
  );
};
