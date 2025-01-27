import React, { useEffect, useState } from "react";
import useDatasheetStore from "@/app/store/datasheetStore";

const Leader: React.FC = () => {
  const [leader, setLeader] = useState<object[]>([]);
  const datasheetId = useDatasheetStore((store: any) => store.datasheetId);

  useEffect(() => {
    if (datasheetId) {
      fetch(`http://localhost:3000/datasheets-leader/${datasheetId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then(async (resp) => {
          const data = await resp.json();
          setLeader(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [datasheetId]);

  return (
    <div>
      <h2 className={"font-amsterdam text-2xl"}>Leader</h2>
      <div>
        {leader.map((l: any, idx: number) => (
          <p key={`${idx}-${l.leader.name}`}>{l.leader.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Leader;
