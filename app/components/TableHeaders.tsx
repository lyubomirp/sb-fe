import React from "react";

const TableHeaders: React.FC<{
  headers: string[];
  className?: string;
  headerStyles?: string;
}> = ({ headers, className, headerStyles }) => {
  return (
    <thead className={className}>
      <tr>
        {headers.map((h, idx) => (
          <th className={headerStyles} key={`th-${idx}`}>
            {h}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeaders;
