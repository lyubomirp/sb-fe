import React from "react";
import Model from "@/app/components/datasheets/Model";
import Stratagems from "@/app/components/datasheets/Stratagems";
import Wargear from "@/app/components/datasheets/Wargear";
import Abilities from "@/app/components/datasheets/Abilities";
import Options from "@/app/components/datasheets/Options";
import Leader from "@/app/components/datasheets/Leader";

const Datasheets: React.FC = () => {
  return (
    <div
      className={"flex flex-row text-white p-10 min-w-full w-auto font-raleway"}
    >
      {/*<div className={"flex flex-col w-full"}>*/}
      {/*  <h1*/}
      {/*    className={*/}
      {/*      "text-9xl font-semibold \n" +*/}
      {/*      "            bg-gradient-to-r bg-clip-text self-center text-center justify-center  text-transparent \n" +*/}
      {/*      "            from-blue-500 via-purple-500 to-red-500\n" +*/}
      {/*      "             mt-52 fixed animate-text tracking-widest"*/}
      {/*    }*/}
      {/*  >*/}
      {/*    PUTA*/}
      {/*  </h1>*/}
      {/*</div>*/}
      <div className={"flex flex-col w-full"}>
        <div className={"flex flex-col gap-28 w-full"}>
          <div
            className={
              "grid grid-cols-4 gap-5 w-full grid-flow-col auto-cols-min justify-center"
            }
          >
            <Model />
            <Wargear />
            <Options />
          </div>
          <div className={"grid grid-cols-3 w-full"}>
            <Abilities />
            <Stratagems />
            <Leader />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Datasheets;
