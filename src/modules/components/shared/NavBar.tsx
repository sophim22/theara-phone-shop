"use client";

import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import Link from "next/link";
import { useState } from "react";
import { CartList } from "../CardList";
import { SearchBar } from "./SearchBar";
import MenuItem from "./MenuItem";

interface Props {
  scrolling: boolean;
}

export const Navbar = ({ scrolling }: Props) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const onHandleSearch = () => {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
    setIsSearch(!isSearch)
  }
  const onHandleCartItem = () => {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="relative">
      <SearchBar isSearch={isSearch} setIsSearch={setIsSearch} onHandleSearch={onHandleSearch} />
      <CartList isCartOpen={isCartOpen} onHandleCartItem={onHandleCartItem} />
      <nav className="lg:flex hidden justify-between w-full px-16 shadow-md border-b bg-blue-400 text-white">
        <section>
          <div className="text-2xl font-bold py-6">
            <Link href={'/'}>Logo</Link>
          </div>
        </section>
        <section>
          <ul className="flex justify-between">
            <li className="px-5 py-8">
              <MenuItem translation={"navbar"} link={"/"} label={"home"} />
            </li>
            <li className="px-5 py-8">
              <MenuItem translation={"navbar"} link={"/categories/huawei"} label={"huawei"} />
            </li>
            <li className="px-5 py-8">
              <MenuItem translation={"navbar"} link={"/categories/apple"} label={"apple"} />
            </li>
            <li className="px-5 py-8">
              <MenuItem translation={"navbar"} link={"/categories/oppo"} label={"oppo"} />
            </li>
            <li className="px-5 py-8">
              <MenuItem translation={"navbar"} link={"/categories/samsung"} label={"samsung"} />
            </li>
            <li className="px-5 py-8">
              <MenuItem translation={"navbar"} link={"/about"} label={"about"} />
            </li>
            <li className="px-5 py-8">
              <MenuItem translation={"navbar"} link={"/contact"} label={"contact"} />
            </li>
          </ul>
        </section>
        <section>
          <ul className="flex justify-between">
            <li className="mx-3 py-8 hover:cursor-pointer" onClick={onHandleSearch}>
              <MagnifyingGlassIcon className="h-7 w-7 text-white" />
            </li>
            <li className="mx-3 py-8 hover:cursor-pointer">
              <Link href={'/account/login'}>
                <UserIcon className="h-7 w-7 text-white" />
              </Link>
            </li>
            <li className="mx-3 py-8 hover:cursor-pointer">
              <Link href={"/wishlist"}>
                <HeartIcon className="h-7 w-7 stroke-[1.5] stroke-white fill-none" />
              </Link>
            </li>
            <li className="mx-3 py-8 hover:cursor-pointer ">
              <div className="relative" onClick={onHandleCartItem}>
                <ShoppingBagIcon className="h-7 w-7 text-white" />
                <span className="absolute -top-1 -right-1 z-30 text-white flex justify-center items-center text-sm bg-red-500 w-4 h-4 rounded-full">0</span>
              </div>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  )
}