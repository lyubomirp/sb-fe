import React from "react";

const TableBody: React.FC<{
  values: string[];
  className?: string;
  cellStyles?: string;
}> = ({ values, className, cellStyles }) => {
  const formatValue = (v: string | number | null) => {
    if (typeof v === "string") {
      return v
        .split(",")
        .map((t) => t.trim())
        .join("\n");
    }

    if (v) {
      return v;
    }

    return "-";
  };

  return (
    <tbody>
      <tr className={className}>
        {values.map((v, idx) => (
          <td className={cellStyles} key={`tb-${idx}`}>
            {formatValue(v)}
          </td>
        ))}
      </tr>
    </tbody>
  );
};

export default TableBody;
