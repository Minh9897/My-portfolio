import { useCallback, useState, useContext, useEffect } from "react";
import parse from "html-react-parser";
import { TableContext } from "./table-context";

const LoginTable = () => {
  const tableCtx = useContext(TableContext);

  const [loading, setIsLoading] = useState(true);

  const loginHandler = useCallback(async () => {
    const responseTable = await fetch(
      "https://proxytable.azurewebsites.net/api/proxyTable/?table=login_table"
    );
    const table = await responseTable.text();
    const jsxTable = parse(table);
    tableCtx.setLoginTable(jsxTable);
    setIsLoading(false);
  }, [tableCtx]);

  useEffect(() => {
    if (tableCtx.loginTable === null) {
      loginHandler();
    } else {
      setIsLoading(false);
    }
  }, [loginHandler, tableCtx]);

  return <div className="relative">{!loading && [tableCtx.loginTable]}</div>;
};

export default LoginTable;
