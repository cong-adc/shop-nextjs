import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ShoppingCart } from "lucide-react";

export default function CardItem({
  title,
  price,
  priceOld,
  image,
  description,
  category,
}) {
  return (
    <div className="">
      <div className="relative h-[334px]">
        <Image src={image} alt="1" fill className="rounded-md" />
        <span className="absolute right-4 top-3 w-fit py-1 px-2 rounded-2xl bg-purple-700 text-white text-sm">
          {category}
        </span>
      </div>
      <div className="mt-2">
        <h2 className="text-base font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
      </div>
      <div className="mt-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="text-[32px] text-[#323743] font-bold">${price}</span>
          <span className="line-through text-gray-400">${priceOld}</span>
        </div>
        <Button
          variant="ghost"
          className="border border-primary-500 rounded-full h-[44px] w-[44px] flex justify-center items-center"
        >
          <ShoppingCart size={48} className="min-w-[20px]" />
        </Button>
      </div>
    </div>
  );
}
