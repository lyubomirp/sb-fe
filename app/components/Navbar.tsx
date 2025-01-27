import React from "react";
import useFactionStore from "@/app/store/factionStore";
import FactionSvgResolver from "@/app/components/FactionSvgResolver";
import useDatasheetStore from "@/app/store/datasheetStore";

const Navbar: React.FC = () => {
  const faction = useFactionStore((store: any) => store.faction);
  const setFaction = useFactionStore((store: any) => store.setFaction);
  const datasheets = useDatasheetStore((store: any) => store.datasheets);
  const dataSheetId = useDatasheetStore((store: any) => store.datasheetId);
  const setDatasheetId = useDatasheetStore(
    (store: any) => store.setDatasheetId,
  );

  return (
    <div
      className={"flex flex-row min-w-full justify-between top-5 max-h-20 p-5"}
    >
      <div
        className={"flex text-2xl text-white self-center cursor-pointer"}
        onClick={() => {
          setFaction(null);
          setDatasheetId(null);
        }}
      >
        ←
      </div>
      <div className={"text-white w-fit"}>
        <select
          className={
            "text-white bg-black px-5 py-1 outline-none w-fit text-2xl text-center"
          }
          onChange={(e) => setDatasheetId(e.target.value)}
          value={dataSheetId}
        >
          {datasheets.map((datasheet: any, key: number) => {
            if (dataSheetId === null && key === 1) {
              setDatasheetId(datasheet.id);
            }

            return (
              <option className={"text-lg"} key={key} value={datasheet.id}>
                {datasheet.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={"flex gap-6 mr-10"}>
        <FactionSvgResolver
          factionId={faction.id}
          className={"fill-white max-w-14 max-h-14 self-center"}
        />
        <span className={"text-white self-center text-2xl"}>
          {faction.name}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
