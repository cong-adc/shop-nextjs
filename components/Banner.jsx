import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";

export default function () {
  return (
    <div
      className="relative w-full h-[602px] flex flex-col justify-center"
      style={{
        backgroundImage: "url(/images/banner.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" flex flex-col justify-center ml-[132px]">
        <h1 className="text-[62px] font-bold text-[#323743]">
          Gift for your skin
        </h1>
        <p className=" text-[#323743] text-xl w-[450px]">
          Aliquip fugiat ipsum nostrud ex et eu incididunt quis minim dolore
          excepteur voluptate
        </p>
        <Button size="lg" className="w-[178px] mt-5">
          Shop Now
        </Button>
      </div>
    </div>
  );
}
