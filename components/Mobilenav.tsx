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
    <div className="flex items-center justify-between bg-[#2c2c2c] dark:bg-darkmode px-5 py-5 md:px-10 md:py-8 font-[family-name:var(--font-syne)]">
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
            <SheetHeader>
              <SheetTitle>Edit profile</SheetTitle>
              <SheetDescription>
                Make changes to your profile here. Click save when you're done.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default Mobilenav;
