import React, { useEffect, useState } from "react";
import useDatasheetStore from "@/app/store/datasheetStore";

const Options: React.FC = () => {
  const [options, setOptions] = useState<[]>([]);
  const datasheetId = useDatasheetStore((store: any) => store.datasheetId);

  useEffect(() => {
    if (datasheetId) {
      if (datasheetId) {
        fetch(`http://localhost:3000/datasheets-options/${datasheetId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(async (resp) => {
            const data = await resp.json();
            setOptions(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [datasheetId]);
  return (
    <div>
      <h2 className={"font-amsterdam text-2xl mb-5"}>Wargear Options</h2>
      <ul className={"list-disc ml-10"}>
        {options.map((op: any, idx) => {
          return (
            <li key={idx} className={"mb-5"}>
              {op.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Options;
