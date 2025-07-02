'use client'

import { navLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import Mobile from "./mobile";

const Navbar = () => {

   return (
    <div className="h-[10vh] backdrop-blur-sm fixed z-40 inset-0 bg-background">
      <div className="container max-w-6xl mx-auto h-[10vh] w-full flex items-center justify-between">
        <Link href={"/"}>
          <h1 className="text-2xl font-mono hidden md:flex">Wendev</h1>
        </Link>

          <div className="flex items-center gap-2">
        <div className="gap-2 hidden md:flex">
          {navLinks.map((nav) => (
            <Link
              key={nav.route}
              href={nav.route}
              className={'hover:bg-blue-400/20 py-1 px-3 cursor-pointer rounded-sm transition-colors'}
            >
              {nav.name}
            </Link>
          ))}
        </div>
          <Mobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;