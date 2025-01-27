import React, { useEffect, useState } from "react";

const UnitComposition: React.FC<{ datasheetId: string }> = ({
  datasheetId,
}) => {
  const [unitComp, setUnitComp] = useState<any>(null);

  useEffect(() => {
    if (datasheetId) {
      if (datasheetId) {
        fetch(
          `http://localhost:3000/datasheets-unit-composition/${datasheetId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        )
          .then(async (resp) => setUnitComp(await resp.json()))
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [datasheetId]);

  return unitComp ? (
    <div className={"flex flex-col gap-5"}>
      <div className={"flex flex-col"}>
        <h3 className={"font-amsterdam tracking-wide text-2xl"}>
          Unit Composition:
        </h3>
        {unitComp.comp.map((c: any, k: number) => (
          <p key={k}> - {c.description}</p>
        ))}
      </div>
      <div className={"flex flex-col"}>
        <h3 className={"font-amsterdam tracking-wide text-2xl"}>Unit Costs:</h3>
        {unitComp.costs.map((c: any, k: number) => (
          <div key={k} className={"flex basis-0 flex-grow flex-shrink"}>
            <span> - {c.description} </span>
            <span className={"text-1xl font-bold text-red-300 ml-auto mr-20"}>
              {c.cost}
            </span>
          </div>
        ))}
      </div>
    </div>
  ) : null;
};

export default UnitComposition;
