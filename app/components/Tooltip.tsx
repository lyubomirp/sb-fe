import React from "react";
import _ from "lodash";

const Tooltip: React.FC<{ tooltipTitle: string }> = ({ tooltipTitle }) => {
  return (
    <div
      className={
        "absolute block transition-opacity min-w-fit whitespace-nowrap opacity-100 group-hover:opacity-100 pointer-events-none bg-white bottom-[80%] -right-10 text-black p-1"
      }
    >
      {_.capitalize(tooltipTitle)}
    </div>
  );
};

export default Tooltip;
