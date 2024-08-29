import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Input } from "./ui/input";
import { Search, ShoppingCart, User, User2 } from "lucide-react";

const menus = [
  {
    link: "/",
    name: "Shop",
  },
  {
    link: "/offers",
    name: "Offers",
  },
  {
    link: "/out-story",
    name: "Out-Story",
  },
  {
    link: "/blog",
    name: "Blog",
  },
];
export default function Header() {
  return (
    <div className="flex items-center justify-between py-4 max-w-7xl mx-auto">
      <div className="w-1/3">
        <Image src="/images/logo.png" width={128} height={42} />
      </div>
      <div className="flex-1 justify-center flex items-center gap-6">
        {menus.map((menu) => (
          <Link
            key={menu.link}
            href={menu.link}
            className="hover:text-primary-500"
          >
            {menu.name}
          </Link>
        ))}
      </div>
      <div className="w-1/3 flex items-center justify-end gap-4">
        <div className="relative">
          <Input type="text" placeholder="Search product..." className="pl-8" />
          <Search
            size={20}
            className="absolute left-2 top-1/2 -translate-y-1/2"
          />
        </div>
        <div className="flex items-center gap-2">
          <ShoppingCart size={20} />
          <span>Cart(0)</span>
        </div>
        <div>
          <User2 size={20} />
        </div>
      </div>
    </div>
  );
}
