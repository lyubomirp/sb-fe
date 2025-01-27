"use client";
import React from "react";
import useFactionStore from "@/app/store/factionStore";
import FactionSvgResolver from "@/app/components/FactionSvgResolver";

const Faction: React.FC<{ factionData: any }> = ({ factionData }) => {
  const setFaction = useFactionStore((store) => store.setFaction);

  return (
    <div
      className={`flex h-[90%] min-w-[30%] mx-10 my-auto top-0 bottom-0 text-white border border-white justify-center bg-cover bg-center cursor-pointer hover:border-red-500`}
      onClick={() => setFaction(factionData)}
    >
      <FactionSvgResolver
        factionId={factionData.id}
        className={"fill-white absolute w-2/12 max-h-72 self-center"}
      />
      <span className="self-start z-10 text-white mt-20 text-5xl">
        {factionData.name}
      </span>
    </div>
  );
};

export default Faction;
