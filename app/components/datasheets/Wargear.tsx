import React, { useEffect, useState } from "react";
import TableHeaders from "@/app/components/TableHeaders";
import TableBody from "@/app/components/TableBody";
import useDatasheetStore from "@/app/store/datasheetStore";

const Wargear: React.FC = () => {
  const [wargear, setWargear] = useState<object[]>([]);
  const datasheetId = useDatasheetStore((store: any) => store.datasheetId);

  useEffect(() => {
    if (datasheetId) {
      fetch(`http://localhost:3000/datasheets-wargear/${datasheetId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (resp) => {
          const data = await resp.json();
          console.log(data);
          setWargear(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [datasheetId]);

  return (
    <div className={"col-span-2"}>
      <h2 className={"font-amsterdam text-2xl mb-5"}>Wargear</h2>
      {wargear && (
        <table
          className={
            "table-fixed text-sm text-left rtl:text-right text-gray-500"
          }
        >
          {wargear.map((gear, idx) => {
            const headers = Object.keys(gear);
            const values = Object.values(gear);

            if (idx === 0) {
              return (
                <React.Fragment key={`frag-${idx}`}>
                  <TableHeaders
                    key={`h-${idx}`}
                    headers={headers}
                    className={"text-xs text-white uppercase bg-transparent"}
                    headerStyles={"px-6 py-3"}
                  />
                  <TableBody
                    key={`b-${idx}`}
                    values={values}
                    className={"bg-transparent text-white border-b"}
                    cellStyles={
                      "px-6 py-4 capitalize w-full whitespace-nowrap w-[1%]"
                    }
                  />
                </React.Fragment>
              );
            }

            return (
              <TableBody
                key={`bo-${idx}`}
                values={values}
                className={"bg-transparent text-white border-b"}
                cellStyles={
                  "px-6 py-4 capitalize w-full whitespace-nowrap w-[1%]"
                }
              />
            );
          })}
        </table>
      )}
    </div>
  );
};

export default Wargear;
