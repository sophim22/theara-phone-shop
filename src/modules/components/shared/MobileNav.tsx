"use client";

import MagnifyingGlassIcon from "@heroicons/react/24/outline/MagnifyingGlassIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import HeartIcon from "@heroicons/react/24/outline/HeartIcon";
import ShoppingBagIcon from "@heroicons/react/24/solid/ShoppingBagIcon";
import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import { useState } from "react";
import classNames from 'classnames';
import Link from "next/link";
import { SearchBar } from "./SearchBar";
import MenuItem from "./MenuItem";

export const MobileNav = () => {
  const [isToggle, setToggle] = useState(false);
  const [isSearch, setIsSearch] = useState(false);

  const onHandleSearch = () => {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
    setIsSearch(!isSearch)
  }

  const handleHumberger = () => {
    document.body.style.overflow =
      document.body.style.overflow === "hidden" ? "auto" : "hidden";
    setToggle(!isToggle);
  };

  return (
    <div>
      <SearchBar isSearch={isSearch} onHandleSearch={onHandleSearch} />
      <div className="relative">
        <div className={classNames({
          'toggle-active': isToggle,
          'toggle-inactive': !isToggle,
        })} onClick={handleHumberger}></div>
        <section className={classNames({
          'menu-active': isToggle,
          'menu-inactive': !isToggle,
        })}>
          <ul>
            <li className="mt-5 w-full">
              <form action='#' className="w-11/12 flex bg-gray-100 rounded-md justify-between mx-auto px-5 md:py-2">
                <input type="text" placeholder="Search our store..." className="py-2 w-10/12 fill-none border-none outline-none bg-inherit" />
                <button type="submit">
                  <MagnifyingGlassIcon className="md:w-8 w-6 md:h-8 h-6 text-gray-500" />
                </button>
              </form>
            </li>
            <li className="hover:cursor-pointer relative group parent mt-2 hover:bg-black/20 hover:rounded-md" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase">
                <MenuItem translation={"navbar"} link={"/"} label={"home"} classItem="w-full" />
              </div>
            </li>
            <li className="hover:cursor-pointer relative group parent hover:bg-black/20 hover:rounded-md" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase">
                <MenuItem translation={"navbar"} link={"/categories/huawei"} label={"huawei"} classItem="w-full" />
              </div>
            </li>
            <li className="relative group parent hover:bg-black/20 hover:rounded-md" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase hover:cursor-pointer">
                <MenuItem translation={"navbar"} link={"/categories/apple"} label={"apple"} classItem="w-full" />
              </div>
            </li>
            <li className="relative group parent hover:bg-black/20 hover:rounded-md" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase hover:cursor-pointer">
                <MenuItem translation={"navbar"} link={"/categories/oppo"} label={"oppo"} classItem="w-full" />
              </div>
            </li>
            <li className="relative group parent hover:bg-black/20 hover:rounded-md" onClick={handleHumberger}>
              <div className="flex items-center justify-between px-5 py-2 uppercase hover:cursor-pointer">
                <MenuItem translation={"navbar"} link={"/categories/samsung"} label={"samsung"} classItem="w-full" />
              </div>
            </li>
            <li className="px-5 py-2 hover:cursor-pointer uppercase relative hover:bg-black/20 hover:rounded-md" onClick={handleHumberger}>
              <MenuItem translation={"navbar"} link={"/about"} label={"about"} classItem="w-full" />
            </li>
            <li className="px-5 py-2 hover:cursor-pointer uppercase relative hover:bg-black/20 hover:rounded-md" onClick={handleHumberger}>
              <MenuItem translation={"navbar"} link={"/contact"} label={"contact"} classItem="w-full" />
            </li>
          </ul>
        </section>
      </div>
      <nav className="lg:hidden flex justify-between items-center p-5 bg-white w-full shadow-md">
        <section>
          <h3 className="font-bold text-xl">Logo</h3>
        </section>
        <section className="flex items-center">
          <div className="mr-5">
            <ul className="flex justify-between">
              <li className="hover:cursor-pointer px-3" onClick={onHandleSearch}>
                <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
              </li>
              <li className="hover:cursor-pointer px-3">
                <Link href={"/account/login"}>
                  <UserIcon className="h-6 w-6 text-gray-500" />
                </Link>
              </li>
              <li className="hover:cursor-pointer px-3">
                <Link href={"/wishlist"}>
                  <HeartIcon className="h-6 w-6 stroke-[1.5] stroke-slate-500 fill-none" />
                </Link>
              </li>
              <li className="hover:cursor-pointer px-3 relative">
                <ShoppingBagIcon className="h-6 w-6 text-gray-500" />
                <span className="absolute -top-1 right-2 z-10 text-white flex justify-center items-center text-sm bg-red-500 w-4 h-4 rounded-full">0</span>
              </li>
            </ul>
          </div>
          <div>
            <button onClick={handleHumberger}>
              <Bars3Icon className="h-8 w-8" />
            </button>
          </div>
        </section>
      </nav>
    </div>
  )
}