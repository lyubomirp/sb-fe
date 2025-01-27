import React from "react";
import { Svg } from "@/app/types/Svg";

const Shield: React.FC<Svg> = ({ className }) => {
  return (
    <svg
      height="800px"
      width="800px"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      enableBackground="new 0 0 512 512"
      className={className}
    >
      <g>
        <g>
          <g>
            <path d="m256,501c-4,0-8-1.2-11.4-3.5-147.3-99.1-232.4-247.2-233.6-406.4-0.1-9.3 6.2-17.5 15.2-19.9l224.6-59.6c3.4-0.9 7-0.9 10.5,0l224.6,59.6c9,2.4 15.2,10.6 15.2,19.9-1.1,159.1-86.3,307.3-233.6,406.4-3.5,2.3-7.5,3.5-11.5,3.5zm-203.7-394.4c6.2,135.4 79.6,261.3 203.7,349.2 124.1-87.9 197.5-213.8 203.7-349.2l-203.7-54.1-203.7,54.1z" />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Shield;
