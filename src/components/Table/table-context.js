import { createContext, useState } from "react";

export const TableContext = createContext();

export const TableProvider = ({ children }) => {
  const [scoreTable, setScoreTable] = useState(null);
  const [loginTable, setLoginTable] = useState(null);

  return (
    <TableContext.Provider
      value={{ scoreTable, loginTable, setScoreTable, setLoginTable }}
    >
      {children}
    </TableContext.Provider>
  );
};
