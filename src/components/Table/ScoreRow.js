const ScoreRow = (props) => {
  const dataKeys = props.dataKeys;
  const rowData = props.data;
  const rows = rowData.map((d, i) => (
    <tr key={i}>
      {dataKeys.map((key) => (
        <td
          key={key}
          data-title={key}
          style={{
            textAlign: key === "Điểm" || key === "Stt" ? "center" : null,
          }}
        >
          {rowData[i][key]}
        </td>
      ))}
    </tr>
  ));

  return [rows];
};

export default ScoreRow;
