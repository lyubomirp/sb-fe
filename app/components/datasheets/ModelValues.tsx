import React from "react";
import _ from "lodash";
import Tooltip from "@/app/components/Tooltip";

const ModelValues: React.FC<{
  value: string;
  title: string;
  tooltipTitle?: string;
  className?: string;
  style?: any;
}> = ({ value, title, tooltipTitle, className, style }) => {
  return (
    <div
      className={`flex flex-col min-w-16 h-16 justify-center border border-white rounded-full ${className}`}
      style={style}
    >
      {/*{tooltipTitle && <Tooltip tooltipTitle={tooltipTitle} />}*/}
      <span className={"self-center text-sm underline"}>
        {_.capitalize(title)}
      </span>
      <span className={"self-center text-2xl"}>{value}</span>
    </div>
  );
};

export default ModelValues;
