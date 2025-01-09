import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

const Mobilenav = () => {
  return (
    <div className="flex items-center justify-between bg-darkmode px-5 py-5 md:px-10 md:py-8 font-[family-name:var(--font-syne)]">
      <div>
        <Link href="/" className="text-white font-medium">
          <span className="text-3xl uppercase">Alec O</span>
          <span className="text-4xl text-orange-400">.</span>
        </Link>
      </div>
      <div>
        <Sheet>
          <SheetTrigger asChild>
            <Image src="/icons/hm.png" alt="" width={30} height={30} />
          </SheetTrigger>
          <SheetContent className="bg-darkmode border-none">
            <SheetClose className="float-right absolute right-3 top-3 bg-darkmode">
              <Image src="/icons/cl.png" alt="" width={25} height={25} />
            </SheetClose>
            <div className="flex flex-col gap-10 mt-24 text-white font-semibold text-lg font-[family-name:var(--font-syne)]">
              <Link
                href="/"
                className="hover:border-b-2 hover:border-orange-400 hover:transition-all hover:h-7 hover:mr-auto"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="hover:border-b-2 hover:border-orange-400 hover:transition-all hover:h-7 mr-auto"
              >
                About
              </Link>
              <Link
                href="/projects"
                className="hover:border-b-2 hover:border-orange-400 hover:transition-all hover:h-7 mr-auto"
              >
                Projects
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Mobilenav;
