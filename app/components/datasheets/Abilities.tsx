import React, { useEffect, useState } from "react";
import useDatasheetStore from "@/app/store/datasheetStore";

const Abilities: React.FC = () => {
  const [abilities, setAbilities] = useState<any>({});
  const datasheetId = useDatasheetStore((store: any) => store.datasheetId);

  useEffect(() => {
    if (datasheetId) {
      if (datasheetId) {
        fetch(`http://localhost:3000/datasheets-abilities/${datasheetId}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(async (resp) => {
            const data = await resp.json();
            setAbilities(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  }, [datasheetId]);

  return (
    <>
      <div className={"flex flex-col w-11/12 gap-8"}>
        <h2 className={"font-amsterdam text-2xl"}>Abilities</h2>
        {Object.entries(abilities as Record<string, Array<object>>).map(
          ([k, v], idx) => {
            return (
              <div className={`pb-2 border-b border-b-white`} key={idx}>
                <h3 className={"font-bold text-xl"} key={`h-${idx}`}>
                  {k}
                </h3>
                {v.map((ability: any) => {
                  if (ability.ability) {
                    return (
                      <p
                        className={"mb-2"}
                        key={`p-${ability.ability.name}-${idx}`}
                      >
                        {ability.ability.name} - {ability.ability.description}
                      </p>
                    );
                  }

                  return (
                    <p className={"mb-2"} key={`pnb-${ability.name}-${idx}`}>
                      {ability.name} - {ability.description}
                    </p>
                  );
                })}
              </div>
            );
          },
        )}
      </div>
    </>
  );
};

export default Abilities;
