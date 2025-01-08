import Link from "next/link";
import React from "react";
import Mobilenav from "./Mobilenav";

const Navbar = () => {
  return (
    <div>
      <div className="hidden lg:flex items-center justify-between bg-[#2c2c2c] dark:bg-darkmode py-5 px-40 font-[family-name:var(--font-syne)]">
        <div>
          <Link href="/" className="text-white font-medium">
            <span className="text-4xl uppercase">Alec O</span>
            <span className="text-5xl text-orange-400">.</span>
          </Link>
        </div>
        <div className="flex gap-10 text-white font-semibold">
          <Link
            href="/"
            className="hover:border-b-2 hover:border-orange-400 hover:transition-all hover:h-6"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:border-b-2 hover:border-orange-400 hover:transition-all hover:h-6"
          >
            About
          </Link>
          <Link
            href="/projects"
            className="hover:border-b-2 hover:border-orange-400 hover:transition-all hover:h-6"
          >
            Projects
          </Link>
        </div>
      </div>

      {/* Mobile Nav  */}
      <div className="lg:hidden">
        <Mobilenav />
      </div>
    </div>
  );
};

export default Navbar;
