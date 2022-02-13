import { useCallback, useState, useContext, useEffect } from "react";
import ScoreRow from "./ScoreRow";
import { TableContext } from "./table-context";

const dataKeys = [
  "Stt",
  "Họ và tên",
  "Ngày sinh",
  "Nơi sinh",
  "Cơ sở",
  "Lớp",
  "Môn thi",
  "Ngày thi",
  "Điểm",
];
const regExp = /\>([^>]+)\</g;
const indexOfAll = (arr, val) =>
  arr.reduce((acc, el, i) => (el === val ? [...acc, i + 1] : acc), []);
const buildObj = (keys, values) => {
  const item = {};
  for (let i = 0; i < keys.length; i++) {
    item[keys[i]] = values[i];
  }
  return item;
};

const ScoreTable = () => {
  const tableCtx = useContext(TableContext);

  const [loading, setIsLoading] = useState(true);

  const addScoreDataHandler = useCallback(async () => {
    const respone = await fetch(
      "https://proxytable.azurewebsites.net/api/proxyTable/?table=score_table"
    );

    const data = await respone.json();
    const matches = [];
    let match = regExp.exec(data.d.split("#%%#")[0]);
    while (match != null) {
      matches.push(match[1]);
      match = regExp.exec(data.d.split("#%%#")[0]);
    }
    const index = [0].concat(indexOfAll(matches, "&nbsp"));
    const array = [];
    for (let i = 0, j = index.length - 1; i < j; i += 1) {
      const dataValues = matches.slice(index[i], index[i + 1] - 1);
      const dataObj = buildObj(dataKeys, dataValues);
      array.push(dataObj);
    }
    tableCtx.setScoreTable(array);
    setIsLoading(false);
  }, [tableCtx]);

  useEffect(() => {
    if (tableCtx.scoreTable === null) {
      addScoreDataHandler();
    } else {
      setIsLoading(false);
    }
  }, [addScoreDataHandler, tableCtx]);

  return (
    <table
      className="col-sm-12 table-bordered table-striped table-condensed"
      style={{ padding: "0px", width: "100%", fontSize: "14px" }}
    >
      <thead>
        <tr
          className="chieu-cao"
          style={{ backgroundColor: "#DFF4FF", color: "#0082c8" }}
        >
          <td style={{ width: "2%", textAlign: "center" }}>Stt</td>
          <td style={{ width: "14%", textAlign: "center" }}>Họ và tên</td>
          <td style={{ width: "8%", textAlign: "center" }}>Ngày sinh</td>
          <td style={{ width: "8%", textAlign: "center" }}>Nơi sinh</td>
          <td style={{ width: "14%", textAlign: "center" }}>Cơ sở</td>
          <td style={{ width: "14%", textAlign: "center" }}>Lớp</td>
          <td style={{ width: "16%", textAlign: "center" }}>Môn thi</td>
          <td style={{ width: "8%", textAlign: "center" }}>Ngày thi</td>
          <td style={{ width: "4%", textAlign: "center" }}>Điểm</td>
        </tr>
      </thead>
      <tbody id="Ketqua">
        {!loading && (
          <ScoreRow data={tableCtx.scoreTable} dataKeys={dataKeys} />
        )}
      </tbody>
    </table>
  );
};

export default ScoreTable;
